# `containerAppJob` Submodule <a name="`containerAppJob` Submodule" id="@cdktf/provider-azurerm.containerAppJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppJob <a name="ContainerAppJob" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job azurerm_container_app_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJob(scope: Construct, id: string, config: ContainerAppJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig">ContainerAppJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig">ContainerAppJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig">putEventTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig">putManualTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistry">putRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig">putScheduleTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetEventTriggerConfig">resetEventTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetManualTriggerConfig">resetManualTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetRegistry">resetRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetReplicaRetryLimit">resetReplicaRetryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetScheduleTriggerConfig">resetScheduleTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetWorkloadProfileName">resetWorkloadProfileName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventTriggerConfig` <a name="putEventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig"></a>

```typescript
public putEventTriggerConfig(value: ContainerAppJobEventTriggerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity"></a>

```typescript
public putIdentity(value: ContainerAppJobIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

---

##### `putManualTriggerConfig` <a name="putManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig"></a>

```typescript
public putManualTriggerConfig(value: ContainerAppJobManualTriggerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

---

##### `putRegistry` <a name="putRegistry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistry"></a>

```typescript
public putRegistry(value: IResolvable | ContainerAppJobRegistry[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistry.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>[]

---

##### `putScheduleTriggerConfig` <a name="putScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig"></a>

```typescript
public putScheduleTriggerConfig(value: ContainerAppJobScheduleTriggerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecret"></a>

```typescript
public putSecret(value: IResolvable | ContainerAppJobSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecret.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>[]

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate"></a>

```typescript
public putTemplate(value: ContainerAppJobTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerAppJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>

---

##### `resetEventTriggerConfig` <a name="resetEventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetEventTriggerConfig"></a>

```typescript
public resetEventTriggerConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetManualTriggerConfig` <a name="resetManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetManualTriggerConfig"></a>

```typescript
public resetManualTriggerConfig(): void
```

##### `resetRegistry` <a name="resetRegistry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetRegistry"></a>

```typescript
public resetRegistry(): void
```

##### `resetReplicaRetryLimit` <a name="resetReplicaRetryLimit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetReplicaRetryLimit"></a>

```typescript
public resetReplicaRetryLimit(): void
```

##### `resetScheduleTriggerConfig` <a name="resetScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetScheduleTriggerConfig"></a>

```typescript
public resetScheduleTriggerConfig(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkloadProfileName` <a name="resetWorkloadProfileName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetWorkloadProfileName"></a>

```typescript
public resetWorkloadProfileName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAppJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isConstruct"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

containerAppJob.ContainerAppJob.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformElement"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

containerAppJob.ContainerAppJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformResource"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

containerAppJob.ContainerAppJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

containerAppJob.ContainerAppJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerAppJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAppJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAppJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAppJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventStreamEndpoint">eventStreamEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfig">eventTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference">ContainerAppJobEventTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference">ContainerAppJobIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfig">manualTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference">ContainerAppJobManualTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registry">registry</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList">ContainerAppJobRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfig">scheduleTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference">ContainerAppJobScheduleTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList">ContainerAppJobSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference">ContainerAppJobTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference">ContainerAppJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentIdInput">containerAppEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfigInput">eventTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfigInput">manualTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registryInput">registryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimitInput">replicaRetryLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSecondsInput">replicaTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfigInput">scheduleTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secretInput">secretInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileNameInput">workloadProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimit">replicaRetryLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSeconds">replicaTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileName">workloadProfileName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventStreamEndpoint`<sup>Required</sup> <a name="eventStreamEndpoint" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventStreamEndpoint"></a>

```typescript
public readonly eventStreamEndpoint: string;
```

- *Type:* string

---

##### `eventTriggerConfig`<sup>Required</sup> <a name="eventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfig"></a>

```typescript
public readonly eventTriggerConfig: ContainerAppJobEventTriggerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference">ContainerAppJobEventTriggerConfigOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identity"></a>

```typescript
public readonly identity: ContainerAppJobIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference">ContainerAppJobIdentityOutputReference</a>

---

##### `manualTriggerConfig`<sup>Required</sup> <a name="manualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfig"></a>

```typescript
public readonly manualTriggerConfig: ContainerAppJobManualTriggerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference">ContainerAppJobManualTriggerConfigOutputReference</a>

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.outboundIpAddresses"></a>

```typescript
public readonly outboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registry"></a>

```typescript
public readonly registry: ContainerAppJobRegistryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList">ContainerAppJobRegistryList</a>

---

##### `scheduleTriggerConfig`<sup>Required</sup> <a name="scheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfig"></a>

```typescript
public readonly scheduleTriggerConfig: ContainerAppJobScheduleTriggerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference">ContainerAppJobScheduleTriggerConfigOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secret"></a>

```typescript
public readonly secret: ContainerAppJobSecretList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList">ContainerAppJobSecretList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.template"></a>

```typescript
public readonly template: ContainerAppJobTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference">ContainerAppJobTemplateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAppJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference">ContainerAppJobTimeoutsOutputReference</a>

---

##### `containerAppEnvironmentIdInput`<sup>Optional</sup> <a name="containerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentIdInput"></a>

```typescript
public readonly containerAppEnvironmentIdInput: string;
```

- *Type:* string

---

##### `eventTriggerConfigInput`<sup>Optional</sup> <a name="eventTriggerConfigInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfigInput"></a>

```typescript
public readonly eventTriggerConfigInput: ContainerAppJobEventTriggerConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identityInput"></a>

```typescript
public readonly identityInput: ContainerAppJobIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `manualTriggerConfigInput`<sup>Optional</sup> <a name="manualTriggerConfigInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfigInput"></a>

```typescript
public readonly manualTriggerConfigInput: ContainerAppJobManualTriggerConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registryInput"></a>

```typescript
public readonly registryInput: IResolvable | ContainerAppJobRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>[]

---

##### `replicaRetryLimitInput`<sup>Optional</sup> <a name="replicaRetryLimitInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimitInput"></a>

```typescript
public readonly replicaRetryLimitInput: number;
```

- *Type:* number

---

##### `replicaTimeoutInSecondsInput`<sup>Optional</sup> <a name="replicaTimeoutInSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSecondsInput"></a>

```typescript
public readonly replicaTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `scheduleTriggerConfigInput`<sup>Optional</sup> <a name="scheduleTriggerConfigInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfigInput"></a>

```typescript
public readonly scheduleTriggerConfigInput: ContainerAppJobScheduleTriggerConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | ContainerAppJobSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.templateInput"></a>

```typescript
public readonly templateInput: ContainerAppJobTemplate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerAppJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>

---

##### `workloadProfileNameInput`<sup>Optional</sup> <a name="workloadProfileNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileNameInput"></a>

```typescript
public readonly workloadProfileNameInput: string;
```

- *Type:* string

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentId"></a>

```typescript
public readonly containerAppEnvironmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `replicaRetryLimit`<sup>Required</sup> <a name="replicaRetryLimit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimit"></a>

```typescript
public readonly replicaRetryLimit: number;
```

- *Type:* number

---

##### `replicaTimeoutInSeconds`<sup>Required</sup> <a name="replicaTimeoutInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSeconds"></a>

```typescript
public readonly replicaTimeoutInSeconds: number;
```

- *Type:* number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workloadProfileName`<sup>Required</sup> <a name="workloadProfileName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileName"></a>

```typescript
public readonly workloadProfileName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppJobConfig <a name="ContainerAppJobConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobConfig: containerAppJob.ContainerAppJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#container_app_environment_id ContainerAppJob#container_app_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#location ContainerAppJob#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaTimeoutInSeconds">replicaTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#replica_timeout_in_seconds ContainerAppJob#replica_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#resource_group_name ContainerAppJob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.eventTriggerConfig">eventTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | event_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#id ContainerAppJob#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.manualTriggerConfig">manualTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | manual_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.registry">registry</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>[]</code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaRetryLimit">replicaRetryLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#replica_retry_limit ContainerAppJob#replica_retry_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.scheduleTriggerConfig">scheduleTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | schedule_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.secret">secret</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>[]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#tags ContainerAppJob#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.workloadProfileName">workloadProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#workload_profile_name ContainerAppJob#workload_profile_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.containerAppEnvironmentId"></a>

```typescript
public readonly containerAppEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#container_app_environment_id ContainerAppJob#container_app_environment_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#location ContainerAppJob#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}.

---

##### `replicaTimeoutInSeconds`<sup>Required</sup> <a name="replicaTimeoutInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaTimeoutInSeconds"></a>

```typescript
public readonly replicaTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#replica_timeout_in_seconds ContainerAppJob#replica_timeout_in_seconds}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#resource_group_name ContainerAppJob#resource_group_name}.

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.template"></a>

```typescript
public readonly template: ContainerAppJobTemplate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#template ContainerAppJob#template}

---

##### `eventTriggerConfig`<sup>Optional</sup> <a name="eventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.eventTriggerConfig"></a>

```typescript
public readonly eventTriggerConfig: ContainerAppJobEventTriggerConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

event_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#event_trigger_config ContainerAppJob#event_trigger_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#id ContainerAppJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.identity"></a>

```typescript
public readonly identity: ContainerAppJobIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `manualTriggerConfig`<sup>Optional</sup> <a name="manualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.manualTriggerConfig"></a>

```typescript
public readonly manualTriggerConfig: ContainerAppJobManualTriggerConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

manual_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#manual_trigger_config ContainerAppJob#manual_trigger_config}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.registry"></a>

```typescript
public readonly registry: IResolvable | ContainerAppJobRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>[]

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#registry ContainerAppJob#registry}

---

##### `replicaRetryLimit`<sup>Optional</sup> <a name="replicaRetryLimit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaRetryLimit"></a>

```typescript
public readonly replicaRetryLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#replica_retry_limit ContainerAppJob#replica_retry_limit}.

---

##### `scheduleTriggerConfig`<sup>Optional</sup> <a name="scheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.scheduleTriggerConfig"></a>

```typescript
public readonly scheduleTriggerConfig: ContainerAppJobScheduleTriggerConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

schedule_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#schedule_trigger_config ContainerAppJob#schedule_trigger_config}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.secret"></a>

```typescript
public readonly secret: IResolvable | ContainerAppJobSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#secret ContainerAppJob#secret}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#tags ContainerAppJob#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAppJobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#timeouts ContainerAppJob#timeouts}

---

##### `workloadProfileName`<sup>Optional</sup> <a name="workloadProfileName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.workloadProfileName"></a>

```typescript
public readonly workloadProfileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#workload_profile_name ContainerAppJob#workload_profile_name}.

---

### ContainerAppJobEventTriggerConfig <a name="ContainerAppJobEventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobEventTriggerConfig: containerAppJob.ContainerAppJobEventTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.parallelism">parallelism</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.replicaCompletionCount">replicaCompletionCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.scale">scale</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>[]</code> | scale block. |

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `replicaCompletionCount`<sup>Optional</sup> <a name="replicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.replicaCompletionCount"></a>

```typescript
public readonly replicaCompletionCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.scale"></a>

```typescript
public readonly scale: IResolvable | ContainerAppJobEventTriggerConfigScale[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>[]

scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#scale ContainerAppJob#scale}

---

### ContainerAppJobEventTriggerConfigScale <a name="ContainerAppJobEventTriggerConfigScale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobEventTriggerConfigScale: containerAppJob.ContainerAppJobEventTriggerConfigScale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.maxExecutions">maxExecutions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#max_executions ContainerAppJob#max_executions}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.minExecutions">minExecutions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#min_executions ContainerAppJob#min_executions}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.pollingIntervalInSeconds">pollingIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#polling_interval_in_seconds ContainerAppJob#polling_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>[]</code> | rules block. |

---

##### `maxExecutions`<sup>Optional</sup> <a name="maxExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.maxExecutions"></a>

```typescript
public readonly maxExecutions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#max_executions ContainerAppJob#max_executions}.

---

##### `minExecutions`<sup>Optional</sup> <a name="minExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.minExecutions"></a>

```typescript
public readonly minExecutions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#min_executions ContainerAppJob#min_executions}.

---

##### `pollingIntervalInSeconds`<sup>Optional</sup> <a name="pollingIntervalInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.pollingIntervalInSeconds"></a>

```typescript
public readonly pollingIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#polling_interval_in_seconds ContainerAppJob#polling_interval_in_seconds}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.rules"></a>

```typescript
public readonly rules: IResolvable | ContainerAppJobEventTriggerConfigScaleRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#rules ContainerAppJob#rules}

---

### ContainerAppJobEventTriggerConfigScaleRules <a name="ContainerAppJobEventTriggerConfigScaleRules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobEventTriggerConfigScaleRules: containerAppJob.ContainerAppJobEventTriggerConfigScaleRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.customRuleType">customRuleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#custom_rule_type ContainerAppJob#custom_rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#metadata ContainerAppJob#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.authentication">authentication</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>[]</code> | authentication block. |

---

##### `customRuleType`<sup>Required</sup> <a name="customRuleType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.customRuleType"></a>

```typescript
public readonly customRuleType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#custom_rule_type ContainerAppJob#custom_rule_type}.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#metadata ContainerAppJob#metadata}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.authentication"></a>

```typescript
public readonly authentication: IResolvable | ContainerAppJobEventTriggerConfigScaleRulesAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>[]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#authentication ContainerAppJob#authentication}

---

### ContainerAppJobEventTriggerConfigScaleRulesAuthentication <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobEventTriggerConfigScaleRulesAuthentication: containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.triggerParameter">triggerParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#trigger_parameter ContainerAppJob#trigger_parameter}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}.

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.triggerParameter"></a>

```typescript
public readonly triggerParameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#trigger_parameter ContainerAppJob#trigger_parameter}.

---

### ContainerAppJobIdentity <a name="ContainerAppJobIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobIdentity: containerAppJob.ContainerAppJobIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#type ContainerAppJob#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#identity_ids ContainerAppJob#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#type ContainerAppJob#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#identity_ids ContainerAppJob#identity_ids}.

---

### ContainerAppJobManualTriggerConfig <a name="ContainerAppJobManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobManualTriggerConfig: containerAppJob.ContainerAppJobManualTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.parallelism">parallelism</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.replicaCompletionCount">replicaCompletionCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `replicaCompletionCount`<sup>Optional</sup> <a name="replicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.replicaCompletionCount"></a>

```typescript
public readonly replicaCompletionCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

### ContainerAppJobRegistry <a name="ContainerAppJobRegistry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobRegistry: containerAppJob.ContainerAppJobRegistry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.server">server</a></code> | <code>string</code> | The hostname for the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.identity">identity</a></code> | <code>string</code> | ID of the System or User Managed Identity used to pull images from the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.passwordSecretName">passwordSecretName</a></code> | <code>string</code> | The name of the Secret Reference containing the password value for this user on the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.username">username</a></code> | <code>string</code> | The username to use for this Container Registry. |

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

The hostname for the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#server ContainerAppJob#server}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

ID of the System or User Managed Identity used to pull images from the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `passwordSecretName`<sup>Optional</sup> <a name="passwordSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.passwordSecretName"></a>

```typescript
public readonly passwordSecretName: string;
```

- *Type:* string

The name of the Secret Reference containing the password value for this user on the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#password_secret_name ContainerAppJob#password_secret_name}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to use for this Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#username ContainerAppJob#username}

---

### ContainerAppJobScheduleTriggerConfig <a name="ContainerAppJobScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobScheduleTriggerConfig: containerAppJob.ContainerAppJobScheduleTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#cron_expression ContainerAppJob#cron_expression}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.parallelism">parallelism</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.replicaCompletionCount">replicaCompletionCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#cron_expression ContainerAppJob#cron_expression}.

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `replicaCompletionCount`<sup>Optional</sup> <a name="replicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.replicaCompletionCount"></a>

```typescript
public readonly replicaCompletionCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

### ContainerAppJobSecret <a name="ContainerAppJobSecret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobSecret: containerAppJob.ContainerAppJobSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.name">name</a></code> | <code>string</code> | The secret name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.identity">identity</a></code> | <code>string</code> | The identity to use for accessing key vault reference. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.keyVaultSecretId">keyVaultSecretId</a></code> | <code>string</code> | The Key Vault Secret ID. Could be either one of `id` or `versionless_id`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.value">value</a></code> | <code>string</code> | The value for this secret. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

The identity to use for accessing key vault reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `keyVaultSecretId`<sup>Optional</sup> <a name="keyVaultSecretId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.keyVaultSecretId"></a>

```typescript
public readonly keyVaultSecretId: string;
```

- *Type:* string

The Key Vault Secret ID. Could be either one of `id` or `versionless_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#key_vault_secret_id ContainerAppJob#key_vault_secret_id}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplate <a name="ContainerAppJobTemplate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplate: containerAppJob.ContainerAppJobTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.container">container</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>[]</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.initContainer">initContainer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>[]</code> | init_container block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.volume">volume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>[]</code> | volume block. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.container"></a>

```typescript
public readonly container: IResolvable | ContainerAppJobTemplateContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>[]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#container ContainerAppJob#container}

---

##### `initContainer`<sup>Optional</sup> <a name="initContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.initContainer"></a>

```typescript
public readonly initContainer: IResolvable | ContainerAppJobTemplateInitContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>[]

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#init_container ContainerAppJob#init_container}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.volume"></a>

```typescript
public readonly volume: IResolvable | ContainerAppJobTemplateVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>[]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#volume ContainerAppJob#volume}

---

### ContainerAppJobTemplateContainer <a name="ContainerAppJobTemplateContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateContainer: containerAppJob.ContainerAppJobTemplateContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.cpu">cpu</a></code> | <code>number</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.image">image</a></code> | <code>string</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.memory">memory</a></code> | <code>string</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.name">name</a></code> | <code>string</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.args">args</a></code> | <code>string[]</code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.command">command</a></code> | <code>string[]</code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.env">env</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>[]</code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.livenessProbe">livenessProbe</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>[]</code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.readinessProbe">readinessProbe</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>[]</code> | readiness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.startupProbe">startupProbe</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>[]</code> | startup_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.volumeMounts">volumeMounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>[]</code> | volume_mounts block. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

The amount of vCPU to allocate to the container.

Possible values include `0.25`, `0.5`, `0.75`, `1.0`, `1.25`, `1.5`, `1.75`, and `2.0`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.0` / `2.0` or `0.5` / `1.0`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#cpu ContainerAppJob#cpu}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#image ContainerAppJob#image}

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

The amount of memory to allocate to the container.

Possible values include `0.5Gi`, `1.0Gi`, `1.5Gi`, `2.0Gi`, `2.5Gi`, `3.0Gi`, `3.5Gi`, and `4.0Gi`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.25` / `2.5Gi` or `0.75` / `1.5Gi`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#memory ContainerAppJob#memory}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#args ContainerAppJob#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#command ContainerAppJob#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.env"></a>

```typescript
public readonly env: IResolvable | ContainerAppJobTemplateContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#env ContainerAppJob#env}

---

##### `livenessProbe`<sup>Optional</sup> <a name="livenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: IResolvable | ContainerAppJobTemplateContainerLivenessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>[]

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#liveness_probe ContainerAppJob#liveness_probe}

---

##### `readinessProbe`<sup>Optional</sup> <a name="readinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.readinessProbe"></a>

```typescript
public readonly readinessProbe: IResolvable | ContainerAppJobTemplateContainerReadinessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>[]

readiness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#readiness_probe ContainerAppJob#readiness_probe}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.startupProbe"></a>

```typescript
public readonly startupProbe: IResolvable | ContainerAppJobTemplateContainerStartupProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>[]

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#startup_probe ContainerAppJob#startup_probe}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | ContainerAppJobTemplateContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#volume_mounts ContainerAppJob#volume_mounts}

---

### ContainerAppJobTemplateContainerEnv <a name="ContainerAppJobTemplateContainerEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateContainerEnv: containerAppJob.ContainerAppJobTemplateContainerEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.name">name</a></code> | <code>string</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.secretName">secretName</a></code> | <code>string</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.value">value</a></code> | <code>string</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerLivenessProbe <a name="ContainerAppJobTemplateContainerLivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateContainerLivenessProbe: containerAppJob.ContainerAppJobTemplateContainerLivenessProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.port">port</a></code> | <code>number</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.transport">transport</a></code> | <code>string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.host">host</a></code> | <code>string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.initialDelay">initialDelay</a></code> | <code>number</code> | The number of seconds elapsed after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.path">path</a></code> | <code>string</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.timeout">timeout</a></code> | <code>number</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `failureCountThreshold`<sup>Optional</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `30`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.header"></a>

```typescript
public readonly header: IResolvable | ContainerAppJobTemplateContainerLivenessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `initialDelay`<sup>Optional</sup> <a name="initialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.initialDelay"></a>

```typescript
public readonly initialDelay: number;
```

- *Type:* number

The number of seconds elapsed after the container has started before the probe is initiated.

Possible values are between `0` and `60`. Defaults to `1` seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerLivenessProbeHeader <a name="ContainerAppJobTemplateContainerLivenessProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateContainerLivenessProbeHeader: containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.name">name</a></code> | <code>string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.value">value</a></code> | <code>string</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerReadinessProbe <a name="ContainerAppJobTemplateContainerReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateContainerReadinessProbe: containerAppJob.ContainerAppJobTemplateContainerReadinessProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.port">port</a></code> | <code>number</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.transport">transport</a></code> | <code>string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.host">host</a></code> | <code>string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.initialDelay">initialDelay</a></code> | <code>number</code> | The number of seconds elapsed after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.path">path</a></code> | <code>string</code> | The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.successCountThreshold">successCountThreshold</a></code> | <code>number</code> | The number of consecutive successful responses required to consider this probe as successful. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.timeout">timeout</a></code> | <code>number</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `failureCountThreshold`<sup>Optional</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `30`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.header"></a>

```typescript
public readonly header: IResolvable | ContainerAppJobTemplateContainerReadinessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `initialDelay`<sup>Optional</sup> <a name="initialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.initialDelay"></a>

```typescript
public readonly initialDelay: number;
```

- *Type:* number

The number of seconds elapsed after the container has started before the probe is initiated.

Possible values are between `0` and `60`. Defaults to `0` seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `successCountThreshold`<sup>Optional</sup> <a name="successCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.successCountThreshold"></a>

```typescript
public readonly successCountThreshold: number;
```

- *Type:* number

The number of consecutive successful responses required to consider this probe as successful.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#success_count_threshold ContainerAppJob#success_count_threshold}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerReadinessProbeHeader <a name="ContainerAppJobTemplateContainerReadinessProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateContainerReadinessProbeHeader: containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.name">name</a></code> | <code>string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.value">value</a></code> | <code>string</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerStartupProbe <a name="ContainerAppJobTemplateContainerStartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateContainerStartupProbe: containerAppJob.ContainerAppJobTemplateContainerStartupProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.port">port</a></code> | <code>number</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.transport">transport</a></code> | <code>string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.host">host</a></code> | <code>string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.initialDelay">initialDelay</a></code> | <code>number</code> | The number of seconds elapsed after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.path">path</a></code> | <code>string</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.timeout">timeout</a></code> | <code>number</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `failureCountThreshold`<sup>Optional</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `30`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.header"></a>

```typescript
public readonly header: IResolvable | ContainerAppJobTemplateContainerStartupProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `initialDelay`<sup>Optional</sup> <a name="initialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.initialDelay"></a>

```typescript
public readonly initialDelay: number;
```

- *Type:* number

The number of seconds elapsed after the container has started before the probe is initiated.

Possible values are between `0` and `60`. Defaults to `0` seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerStartupProbeHeader <a name="ContainerAppJobTemplateContainerStartupProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateContainerStartupProbeHeader: containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.name">name</a></code> | <code>string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.value">value</a></code> | <code>string</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerVolumeMounts <a name="ContainerAppJobTemplateContainerVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateContainerVolumeMounts: containerAppJob.ContainerAppJobTemplateContainerVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.name">name</a></code> | <code>string</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.path">path</a></code> | <code>string</code> | The path in the container at which to mount this volume. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

### ContainerAppJobTemplateInitContainer <a name="ContainerAppJobTemplateInitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateInitContainer: containerAppJob.ContainerAppJobTemplateInitContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.image">image</a></code> | <code>string</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.name">name</a></code> | <code>string</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.args">args</a></code> | <code>string[]</code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.command">command</a></code> | <code>string[]</code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.cpu">cpu</a></code> | <code>number</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.env">env</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>[]</code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.memory">memory</a></code> | <code>string</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.volumeMounts">volumeMounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>[]</code> | volume_mounts block. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#image ContainerAppJob#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#args ContainerAppJob#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#command ContainerAppJob#command}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

The amount of vCPU to allocate to the container.

Possible values include `0.25`, `0.5`, `0.75`, `1.0`, `1.25`, `1.5`, `1.75`, and `2.0`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.0` / `2.0` or `0.5` / `1.0`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#cpu ContainerAppJob#cpu}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.env"></a>

```typescript
public readonly env: IResolvable | ContainerAppJobTemplateInitContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#env ContainerAppJob#env}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

The amount of memory to allocate to the container.

Possible values include `0.5Gi`, `1.0Gi`, `1.5Gi`, `2.0Gi`, `2.5Gi`, `3.0Gi`, `3.5Gi`, and `4.0Gi`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.25` / `2.5Gi` or `0.75` / `1.5Gi`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#memory ContainerAppJob#memory}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | ContainerAppJobTemplateInitContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#volume_mounts ContainerAppJob#volume_mounts}

---

### ContainerAppJobTemplateInitContainerEnv <a name="ContainerAppJobTemplateInitContainerEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateInitContainerEnv: containerAppJob.ContainerAppJobTemplateInitContainerEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.name">name</a></code> | <code>string</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.secretName">secretName</a></code> | <code>string</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.value">value</a></code> | <code>string</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateInitContainerVolumeMounts <a name="ContainerAppJobTemplateInitContainerVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateInitContainerVolumeMounts: containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.name">name</a></code> | <code>string</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.path">path</a></code> | <code>string</code> | The path in the container at which to mount this volume. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

### ContainerAppJobTemplateVolume <a name="ContainerAppJobTemplateVolume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTemplateVolume: containerAppJob.ContainerAppJobTemplateVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.name">name</a></code> | <code>string</code> | The name of the volume. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageName">storageName</a></code> | <code>string</code> | The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageType">storageType</a></code> | <code>string</code> | The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `storageName`<sup>Optional</sup> <a name="storageName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageName"></a>

```typescript
public readonly storageName: string;
```

- *Type:* string

The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#storage_name ContainerAppJob#storage_name}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#storage_type ContainerAppJob#storage_type}

---

### ContainerAppJobTimeouts <a name="ContainerAppJobTimeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

const containerAppJobTimeouts: containerAppJob.ContainerAppJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#create ContainerAppJob#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#delete ContainerAppJob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#read ContainerAppJob#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#update ContainerAppJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#create ContainerAppJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#delete ContainerAppJob#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#read ContainerAppJob#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/container_app_job#update ContainerAppJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppJobEventTriggerConfigOutputReference <a name="ContainerAppJobEventTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobEventTriggerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.putScale">putScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetParallelism">resetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetReplicaCompletionCount">resetReplicaCompletionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetScale">resetScale</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScale` <a name="putScale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.putScale"></a>

```typescript
public putScale(value: IResolvable | ContainerAppJobEventTriggerConfigScale[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.putScale.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>[]

---

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetParallelism"></a>

```typescript
public resetParallelism(): void
```

##### `resetReplicaCompletionCount` <a name="resetReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```typescript
public resetReplicaCompletionCount(): void
```

##### `resetScale` <a name="resetScale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetScale"></a>

```typescript
public resetScale(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scale">scale</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList">ContainerAppJobEventTriggerConfigScaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelismInput">parallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCountInput">replicaCompletionCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scaleInput">scaleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelism">parallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCount">replicaCompletionCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scale"></a>

```typescript
public readonly scale: ContainerAppJobEventTriggerConfigScaleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList">ContainerAppJobEventTriggerConfigScaleList</a>

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelismInput"></a>

```typescript
public readonly parallelismInput: number;
```

- *Type:* number

---

##### `replicaCompletionCountInput`<sup>Optional</sup> <a name="replicaCompletionCountInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```typescript
public readonly replicaCompletionCountInput: number;
```

- *Type:* number

---

##### `scaleInput`<sup>Optional</sup> <a name="scaleInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scaleInput"></a>

```typescript
public readonly scaleInput: IResolvable | ContainerAppJobEventTriggerConfigScale[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>[]

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

---

##### `replicaCompletionCount`<sup>Required</sup> <a name="replicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```typescript
public readonly replicaCompletionCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAppJobEventTriggerConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

---


### ContainerAppJobEventTriggerConfigScaleList <a name="ContainerAppJobEventTriggerConfigScaleList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobEventTriggerConfigScaleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.get"></a>

```typescript
public get(index: number): ContainerAppJobEventTriggerConfigScaleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobEventTriggerConfigScale[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>[]

---


### ContainerAppJobEventTriggerConfigScaleOutputReference <a name="ContainerAppJobEventTriggerConfigScaleOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMaxExecutions">resetMaxExecutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMinExecutions">resetMinExecutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetPollingIntervalInSeconds">resetPollingIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | ContainerAppJobEventTriggerConfigScaleRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>[]

---

##### `resetMaxExecutions` <a name="resetMaxExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMaxExecutions"></a>

```typescript
public resetMaxExecutions(): void
```

##### `resetMinExecutions` <a name="resetMinExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMinExecutions"></a>

```typescript
public resetMinExecutions(): void
```

##### `resetPollingIntervalInSeconds` <a name="resetPollingIntervalInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetPollingIntervalInSeconds"></a>

```typescript
public resetPollingIntervalInSeconds(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList">ContainerAppJobEventTriggerConfigScaleRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutionsInput">maxExecutionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutionsInput">minExecutionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSecondsInput">pollingIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutions">maxExecutions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutions">minExecutions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSeconds">pollingIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rules"></a>

```typescript
public readonly rules: ContainerAppJobEventTriggerConfigScaleRulesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList">ContainerAppJobEventTriggerConfigScaleRulesList</a>

---

##### `maxExecutionsInput`<sup>Optional</sup> <a name="maxExecutionsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutionsInput"></a>

```typescript
public readonly maxExecutionsInput: number;
```

- *Type:* number

---

##### `minExecutionsInput`<sup>Optional</sup> <a name="minExecutionsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutionsInput"></a>

```typescript
public readonly minExecutionsInput: number;
```

- *Type:* number

---

##### `pollingIntervalInSecondsInput`<sup>Optional</sup> <a name="pollingIntervalInSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSecondsInput"></a>

```typescript
public readonly pollingIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | ContainerAppJobEventTriggerConfigScaleRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>[]

---

##### `maxExecutions`<sup>Required</sup> <a name="maxExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutions"></a>

```typescript
public readonly maxExecutions: number;
```

- *Type:* number

---

##### `minExecutions`<sup>Required</sup> <a name="minExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutions"></a>

```typescript
public readonly minExecutions: number;
```

- *Type:* number

---

##### `pollingIntervalInSeconds`<sup>Required</sup> <a name="pollingIntervalInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSeconds"></a>

```typescript
public readonly pollingIntervalInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobEventTriggerConfigScale;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale">ContainerAppJobEventTriggerConfigScale</a>

---


### ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.get"></a>

```typescript
public get(index: number): ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobEventTriggerConfigScaleRulesAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>[]

---


### ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameterInput">triggerParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameter">triggerParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `triggerParameterInput`<sup>Optional</sup> <a name="triggerParameterInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameterInput"></a>

```typescript
public readonly triggerParameterInput: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameter"></a>

```typescript
public readonly triggerParameter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobEventTriggerConfigScaleRulesAuthentication;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>

---


### ContainerAppJobEventTriggerConfigScaleRulesList <a name="ContainerAppJobEventTriggerConfigScaleRulesList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.get"></a>

```typescript
public get(index: number): ContainerAppJobEventTriggerConfigScaleRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobEventTriggerConfigScaleRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>[]

---


### ContainerAppJobEventTriggerConfigScaleRulesOutputReference <a name="ContainerAppJobEventTriggerConfigScaleRulesOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: IResolvable | ContainerAppJobEventTriggerConfigScaleRulesAuthentication[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.putAuthentication.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>[]

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList">ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authenticationInput">authenticationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleTypeInput">customRuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleType">customRuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authentication"></a>

```typescript
public readonly authentication: ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList">ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: IResolvable | ContainerAppJobEventTriggerConfigScaleRulesAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication">ContainerAppJobEventTriggerConfigScaleRulesAuthentication</a>[]

---

##### `customRuleTypeInput`<sup>Optional</sup> <a name="customRuleTypeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleTypeInput"></a>

```typescript
public readonly customRuleTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `customRuleType`<sup>Required</sup> <a name="customRuleType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleType"></a>

```typescript
public readonly customRuleType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobEventTriggerConfigScaleRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules">ContainerAppJobEventTriggerConfigScaleRules</a>

---


### ContainerAppJobIdentityOutputReference <a name="ContainerAppJobIdentityOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAppJobIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

---


### ContainerAppJobManualTriggerConfigOutputReference <a name="ContainerAppJobManualTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobManualTriggerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetParallelism">resetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetReplicaCompletionCount">resetReplicaCompletionCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetParallelism"></a>

```typescript
public resetParallelism(): void
```

##### `resetReplicaCompletionCount` <a name="resetReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```typescript
public resetReplicaCompletionCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelismInput">parallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCountInput">replicaCompletionCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelism">parallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCount">replicaCompletionCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelismInput"></a>

```typescript
public readonly parallelismInput: number;
```

- *Type:* number

---

##### `replicaCompletionCountInput`<sup>Optional</sup> <a name="replicaCompletionCountInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```typescript
public readonly replicaCompletionCountInput: number;
```

- *Type:* number

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

---

##### `replicaCompletionCount`<sup>Required</sup> <a name="replicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```typescript
public readonly replicaCompletionCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAppJobManualTriggerConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

---


### ContainerAppJobRegistryList <a name="ContainerAppJobRegistryList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobRegistryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.get"></a>

```typescript
public get(index: number): ContainerAppJobRegistryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>[]

---


### ContainerAppJobRegistryOutputReference <a name="ContainerAppJobRegistryOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobRegistryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetPasswordSecretName">resetPasswordSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetPasswordSecretName` <a name="resetPasswordSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetPasswordSecretName"></a>

```typescript
public resetPasswordSecretName(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identityInput">identityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretNameInput">passwordSecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretName">passwordSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identityInput"></a>

```typescript
public readonly identityInput: string;
```

- *Type:* string

---

##### `passwordSecretNameInput`<sup>Optional</sup> <a name="passwordSecretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretNameInput"></a>

```typescript
public readonly passwordSecretNameInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `passwordSecretName`<sup>Required</sup> <a name="passwordSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretName"></a>

```typescript
public readonly passwordSecretName: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobRegistry;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry">ContainerAppJobRegistry</a>

---


### ContainerAppJobScheduleTriggerConfigOutputReference <a name="ContainerAppJobScheduleTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetParallelism">resetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetReplicaCompletionCount">resetReplicaCompletionCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetParallelism"></a>

```typescript
public resetParallelism(): void
```

##### `resetReplicaCompletionCount` <a name="resetReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```typescript
public resetReplicaCompletionCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelismInput">parallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCountInput">replicaCompletionCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelism">parallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCount">replicaCompletionCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelismInput"></a>

```typescript
public readonly parallelismInput: number;
```

- *Type:* number

---

##### `replicaCompletionCountInput`<sup>Optional</sup> <a name="replicaCompletionCountInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```typescript
public readonly replicaCompletionCountInput: number;
```

- *Type:* number

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

---

##### `replicaCompletionCount`<sup>Required</sup> <a name="replicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```typescript
public readonly replicaCompletionCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAppJobScheduleTriggerConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

---


### ContainerAppJobSecretList <a name="ContainerAppJobSecretList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.get"></a>

```typescript
public get(index: number): ContainerAppJobSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>[]

---


### ContainerAppJobSecretOutputReference <a name="ContainerAppJobSecretOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetKeyVaultSecretId">resetKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetKeyVaultSecretId` <a name="resetKeyVaultSecretId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetKeyVaultSecretId"></a>

```typescript
public resetKeyVaultSecretId(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identityInput">identityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretIdInput">keyVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretId">keyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identityInput"></a>

```typescript
public readonly identityInput: string;
```

- *Type:* string

---

##### `keyVaultSecretIdInput`<sup>Optional</sup> <a name="keyVaultSecretIdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretIdInput"></a>

```typescript
public readonly keyVaultSecretIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `keyVaultSecretId`<sup>Required</sup> <a name="keyVaultSecretId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretId"></a>

```typescript
public readonly keyVaultSecretId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobSecret;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret">ContainerAppJobSecret</a>

---


### ContainerAppJobTemplateContainerEnvList <a name="ContainerAppJobTemplateContainerEnvList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateContainerEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>[]

---


### ContainerAppJobTemplateContainerEnvOutputReference <a name="ContainerAppJobTemplateContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetSecretName"></a>

```typescript
public resetSecretName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerEnv;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>

---


### ContainerAppJobTemplateContainerList <a name="ContainerAppJobTemplateContainerList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>[]

---


### ContainerAppJobTemplateContainerLivenessProbeHeaderList <a name="ContainerAppJobTemplateContainerLivenessProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerLivenessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>[]

---


### ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerLivenessProbeHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>

---


### ContainerAppJobTemplateContainerLivenessProbeList <a name="ContainerAppJobTemplateContainerLivenessProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateContainerLivenessProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerLivenessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>[]

---


### ContainerAppJobTemplateContainerLivenessProbeOutputReference <a name="ContainerAppJobTemplateContainerLivenessProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold">resetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetInitialDelay">resetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ContainerAppJobTemplateContainerLivenessProbeHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>[]

---

##### `resetFailureCountThreshold` <a name="resetFailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold"></a>

```typescript
public resetFailureCountThreshold(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetInitialDelay` <a name="resetInitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetInitialDelay"></a>

```typescript
public resetInitialDelay(): void
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList">ContainerAppJobTemplateContainerLivenessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds">terminationGracePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput">failureCountThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelayInput">initialDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transportInput">transportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelay">initialDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transport">transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.header"></a>

```typescript
public readonly header: ContainerAppJobTemplateContainerLivenessProbeHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList">ContainerAppJobTemplateContainerLivenessProbeHeaderList</a>

---

##### `terminationGracePeriodSeconds`<sup>Required</sup> <a name="terminationGracePeriodSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```typescript
public readonly terminationGracePeriodSeconds: number;
```

- *Type:* number

---

##### `failureCountThresholdInput`<sup>Optional</sup> <a name="failureCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput"></a>

```typescript
public readonly failureCountThresholdInput: number;
```

- *Type:* number

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ContainerAppJobTemplateContainerLivenessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader">ContainerAppJobTemplateContainerLivenessProbeHeader</a>[]

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `initialDelayInput`<sup>Optional</sup> <a name="initialDelayInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelayInput"></a>

```typescript
public readonly initialDelayInput: number;
```

- *Type:* number

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transportInput"></a>

```typescript
public readonly transportInput: string;
```

- *Type:* string

---

##### `failureCountThreshold`<sup>Required</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `initialDelay`<sup>Required</sup> <a name="initialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelay"></a>

```typescript
public readonly initialDelay: number;
```

- *Type:* number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerLivenessProbe;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>

---


### ContainerAppJobTemplateContainerOutputReference <a name="ContainerAppJobTemplateContainerOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putLivenessProbe">putLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putReadinessProbe">putReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetLivenessProbe">resetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetReadinessProbe">resetReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | ContainerAppJobTemplateContainerEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>[]

---

##### `putLivenessProbe` <a name="putLivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putLivenessProbe"></a>

```typescript
public putLivenessProbe(value: IResolvable | ContainerAppJobTemplateContainerLivenessProbe[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>[]

---

##### `putReadinessProbe` <a name="putReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putReadinessProbe"></a>

```typescript
public putReadinessProbe(value: IResolvable | ContainerAppJobTemplateContainerReadinessProbe[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putReadinessProbe.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>[]

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putStartupProbe"></a>

```typescript
public putStartupProbe(value: IResolvable | ContainerAppJobTemplateContainerStartupProbe[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>[]

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | ContainerAppJobTemplateContainerVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetLivenessProbe` <a name="resetLivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetLivenessProbe"></a>

```typescript
public resetLivenessProbe(): void
```

##### `resetReadinessProbe` <a name="resetReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetReadinessProbe"></a>

```typescript
public resetReadinessProbe(): void
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetStartupProbe"></a>

```typescript
public resetStartupProbe(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList">ContainerAppJobTemplateContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList">ContainerAppJobTemplateContainerLivenessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbe">readinessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList">ContainerAppJobTemplateContainerReadinessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList">ContainerAppJobTemplateContainerStartupProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList">ContainerAppJobTemplateContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.envInput">envInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbeInput">livenessProbeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbeInput">readinessProbeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.env"></a>

```typescript
public readonly env: ContainerAppJobTemplateContainerEnvList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList">ContainerAppJobTemplateContainerEnvList</a>

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: string;
```

- *Type:* string

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: ContainerAppJobTemplateContainerLivenessProbeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList">ContainerAppJobTemplateContainerLivenessProbeList</a>

---

##### `readinessProbe`<sup>Required</sup> <a name="readinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbe"></a>

```typescript
public readonly readinessProbe: ContainerAppJobTemplateContainerReadinessProbeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList">ContainerAppJobTemplateContainerReadinessProbeList</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbe"></a>

```typescript
public readonly startupProbe: ContainerAppJobTemplateContainerStartupProbeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList">ContainerAppJobTemplateContainerStartupProbeList</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: ContainerAppJobTemplateContainerVolumeMountsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList">ContainerAppJobTemplateContainerVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | ContainerAppJobTemplateContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv">ContainerAppJobTemplateContainerEnv</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `livenessProbeInput`<sup>Optional</sup> <a name="livenessProbeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbeInput"></a>

```typescript
public readonly livenessProbeInput: IResolvable | ContainerAppJobTemplateContainerLivenessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe">ContainerAppJobTemplateContainerLivenessProbe</a>[]

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readinessProbeInput`<sup>Optional</sup> <a name="readinessProbeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbeInput"></a>

```typescript
public readonly readinessProbeInput: IResolvable | ContainerAppJobTemplateContainerReadinessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>[]

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbeInput"></a>

```typescript
public readonly startupProbeInput: IResolvable | ContainerAppJobTemplateContainerStartupProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>[]

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | ContainerAppJobTemplateContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>[]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>

---


### ContainerAppJobTemplateContainerReadinessProbeHeaderList <a name="ContainerAppJobTemplateContainerReadinessProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerReadinessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>[]

---


### ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerReadinessProbeHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>

---


### ContainerAppJobTemplateContainerReadinessProbeList <a name="ContainerAppJobTemplateContainerReadinessProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateContainerReadinessProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerReadinessProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>[]

---


### ContainerAppJobTemplateContainerReadinessProbeOutputReference <a name="ContainerAppJobTemplateContainerReadinessProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold">resetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetInitialDelay">resetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold">resetSuccessCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ContainerAppJobTemplateContainerReadinessProbeHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>[]

---

##### `resetFailureCountThreshold` <a name="resetFailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold"></a>

```typescript
public resetFailureCountThreshold(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetInitialDelay` <a name="resetInitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetInitialDelay"></a>

```typescript
public resetInitialDelay(): void
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetSuccessCountThreshold` <a name="resetSuccessCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold"></a>

```typescript
public resetSuccessCountThreshold(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList">ContainerAppJobTemplateContainerReadinessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput">failureCountThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelayInput">initialDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput">successCountThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transportInput">transportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelay">initialDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThreshold">successCountThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transport">transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.header"></a>

```typescript
public readonly header: ContainerAppJobTemplateContainerReadinessProbeHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList">ContainerAppJobTemplateContainerReadinessProbeHeaderList</a>

---

##### `failureCountThresholdInput`<sup>Optional</sup> <a name="failureCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput"></a>

```typescript
public readonly failureCountThresholdInput: number;
```

- *Type:* number

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ContainerAppJobTemplateContainerReadinessProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader">ContainerAppJobTemplateContainerReadinessProbeHeader</a>[]

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `initialDelayInput`<sup>Optional</sup> <a name="initialDelayInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelayInput"></a>

```typescript
public readonly initialDelayInput: number;
```

- *Type:* number

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `successCountThresholdInput`<sup>Optional</sup> <a name="successCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput"></a>

```typescript
public readonly successCountThresholdInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transportInput"></a>

```typescript
public readonly transportInput: string;
```

- *Type:* string

---

##### `failureCountThreshold`<sup>Required</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `initialDelay`<sup>Required</sup> <a name="initialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelay"></a>

```typescript
public readonly initialDelay: number;
```

- *Type:* number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `successCountThreshold`<sup>Required</sup> <a name="successCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThreshold"></a>

```typescript
public readonly successCountThreshold: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerReadinessProbe;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe">ContainerAppJobTemplateContainerReadinessProbe</a>

---


### ContainerAppJobTemplateContainerStartupProbeHeaderList <a name="ContainerAppJobTemplateContainerStartupProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerStartupProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>[]

---


### ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerStartupProbeHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>

---


### ContainerAppJobTemplateContainerStartupProbeList <a name="ContainerAppJobTemplateContainerStartupProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerStartupProbeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateContainerStartupProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerStartupProbe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>[]

---


### ContainerAppJobTemplateContainerStartupProbeOutputReference <a name="ContainerAppJobTemplateContainerStartupProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold">resetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetInitialDelay">resetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ContainerAppJobTemplateContainerStartupProbeHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>[]

---

##### `resetFailureCountThreshold` <a name="resetFailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold"></a>

```typescript
public resetFailureCountThreshold(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetInitialDelay` <a name="resetInitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetInitialDelay"></a>

```typescript
public resetInitialDelay(): void
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList">ContainerAppJobTemplateContainerStartupProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds">terminationGracePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput">failureCountThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelayInput">initialDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transportInput">transportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThreshold">failureCountThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelay">initialDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transport">transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.header"></a>

```typescript
public readonly header: ContainerAppJobTemplateContainerStartupProbeHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList">ContainerAppJobTemplateContainerStartupProbeHeaderList</a>

---

##### `terminationGracePeriodSeconds`<sup>Required</sup> <a name="terminationGracePeriodSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```typescript
public readonly terminationGracePeriodSeconds: number;
```

- *Type:* number

---

##### `failureCountThresholdInput`<sup>Optional</sup> <a name="failureCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput"></a>

```typescript
public readonly failureCountThresholdInput: number;
```

- *Type:* number

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ContainerAppJobTemplateContainerStartupProbeHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader">ContainerAppJobTemplateContainerStartupProbeHeader</a>[]

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `initialDelayInput`<sup>Optional</sup> <a name="initialDelayInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelayInput"></a>

```typescript
public readonly initialDelayInput: number;
```

- *Type:* number

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transportInput"></a>

```typescript
public readonly transportInput: string;
```

- *Type:* string

---

##### `failureCountThreshold`<sup>Required</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThreshold"></a>

```typescript
public readonly failureCountThreshold: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `initialDelay`<sup>Required</sup> <a name="initialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelay"></a>

```typescript
public readonly initialDelay: number;
```

- *Type:* number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerStartupProbe;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe">ContainerAppJobTemplateContainerStartupProbe</a>

---


### ContainerAppJobTemplateContainerVolumeMountsList <a name="ContainerAppJobTemplateContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateContainerVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>[]

---


### ContainerAppJobTemplateContainerVolumeMountsOutputReference <a name="ContainerAppJobTemplateContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateContainerVolumeMounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts">ContainerAppJobTemplateContainerVolumeMounts</a>

---


### ContainerAppJobTemplateInitContainerEnvList <a name="ContainerAppJobTemplateInitContainerEnvList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateInitContainerEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateInitContainerEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateInitContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>[]

---


### ContainerAppJobTemplateInitContainerEnvOutputReference <a name="ContainerAppJobTemplateInitContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetSecretName"></a>

```typescript
public resetSecretName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateInitContainerEnv;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>

---


### ContainerAppJobTemplateInitContainerList <a name="ContainerAppJobTemplateInitContainerList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateInitContainerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateInitContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateInitContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>[]

---


### ContainerAppJobTemplateInitContainerOutputReference <a name="ContainerAppJobTemplateInitContainerOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateInitContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | ContainerAppJobTemplateInitContainerEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>[]

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | ContainerAppJobTemplateInitContainerVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList">ContainerAppJobTemplateInitContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList">ContainerAppJobTemplateInitContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.envInput">envInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.env"></a>

```typescript
public readonly env: ContainerAppJobTemplateInitContainerEnvList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList">ContainerAppJobTemplateInitContainerEnvList</a>

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: string;
```

- *Type:* string

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: ContainerAppJobTemplateInitContainerVolumeMountsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList">ContainerAppJobTemplateInitContainerVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | ContainerAppJobTemplateInitContainerEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv">ContainerAppJobTemplateInitContainerEnv</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | ContainerAppJobTemplateInitContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>[]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateInitContainer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>

---


### ContainerAppJobTemplateInitContainerVolumeMountsList <a name="ContainerAppJobTemplateInitContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateInitContainerVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateInitContainerVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>[]

---


### ContainerAppJobTemplateInitContainerVolumeMountsOutputReference <a name="ContainerAppJobTemplateInitContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateInitContainerVolumeMounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts">ContainerAppJobTemplateInitContainerVolumeMounts</a>

---


### ContainerAppJobTemplateOutputReference <a name="ContainerAppJobTemplateOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putInitContainer">putInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetInitContainer">resetInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainer` <a name="putContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putContainer"></a>

```typescript
public putContainer(value: IResolvable | ContainerAppJobTemplateContainer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putContainer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>[]

---

##### `putInitContainer` <a name="putInitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putInitContainer"></a>

```typescript
public putInitContainer(value: IResolvable | ContainerAppJobTemplateInitContainer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putInitContainer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>[]

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putVolume"></a>

```typescript
public putVolume(value: IResolvable | ContainerAppJobTemplateVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>[]

---

##### `resetInitContainer` <a name="resetInitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetInitContainer"></a>

```typescript
public resetInitContainer(): void
```

##### `resetVolume` <a name="resetVolume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetVolume"></a>

```typescript
public resetVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList">ContainerAppJobTemplateContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainer">initContainer</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList">ContainerAppJobTemplateInitContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList">ContainerAppJobTemplateVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.containerInput">containerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainerInput">initContainerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volumeInput">volumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.container"></a>

```typescript
public readonly container: ContainerAppJobTemplateContainerList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList">ContainerAppJobTemplateContainerList</a>

---

##### `initContainer`<sup>Required</sup> <a name="initContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainer"></a>

```typescript
public readonly initContainer: ContainerAppJobTemplateInitContainerList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList">ContainerAppJobTemplateInitContainerList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volume"></a>

```typescript
public readonly volume: ContainerAppJobTemplateVolumeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList">ContainerAppJobTemplateVolumeList</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: IResolvable | ContainerAppJobTemplateContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer">ContainerAppJobTemplateContainer</a>[]

---

##### `initContainerInput`<sup>Optional</sup> <a name="initContainerInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainerInput"></a>

```typescript
public readonly initContainerInput: IResolvable | ContainerAppJobTemplateInitContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer">ContainerAppJobTemplateInitContainer</a>[]

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volumeInput"></a>

```typescript
public readonly volumeInput: IResolvable | ContainerAppJobTemplateVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAppJobTemplate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

---


### ContainerAppJobTemplateVolumeList <a name="ContainerAppJobTemplateVolumeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.get"></a>

```typescript
public get(index: number): ContainerAppJobTemplateVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>[]

---


### ContainerAppJobTemplateVolumeOutputReference <a name="ContainerAppJobTemplateVolumeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTemplateVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageName">resetStorageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageType">resetStorageType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageName` <a name="resetStorageName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageName"></a>

```typescript
public resetStorageName(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageType"></a>

```typescript
public resetStorageType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageNameInput">storageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageName">storageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageNameInput`<sup>Optional</sup> <a name="storageNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageNameInput"></a>

```typescript
public readonly storageNameInput: string;
```

- *Type:* string

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageName`<sup>Required</sup> <a name="storageName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageName"></a>

```typescript
public readonly storageName: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTemplateVolume;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume">ContainerAppJobTemplateVolume</a>

---


### ContainerAppJobTimeoutsOutputReference <a name="ContainerAppJobTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerAppJob } from '@cdktf/provider-azurerm'

new containerAppJob.ContainerAppJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>

---



