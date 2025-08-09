# `monitorActionGroup` Submodule <a name="`monitorActionGroup` Submodule" id="@cdktf/provider-azurerm.monitorActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorActionGroup <a name="MonitorActionGroup" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group azurerm_monitor_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroup(scope: Construct, id: string, config: MonitorActionGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig">MonitorActionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig">MonitorActionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putArmRoleReceiver">putArmRoleReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAutomationRunbookReceiver">putAutomationRunbookReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureAppPushReceiver">putAzureAppPushReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureFunctionReceiver">putAzureFunctionReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEmailReceiver">putEmailReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEventHubReceiver">putEventHubReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putItsmReceiver">putItsmReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putLogicAppReceiver">putLogicAppReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putSmsReceiver">putSmsReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putVoiceReceiver">putVoiceReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putWebhookReceiver">putWebhookReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetArmRoleReceiver">resetArmRoleReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAutomationRunbookReceiver">resetAutomationRunbookReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureAppPushReceiver">resetAzureAppPushReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureFunctionReceiver">resetAzureFunctionReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEmailReceiver">resetEmailReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEventHubReceiver">resetEventHubReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetItsmReceiver">resetItsmReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLogicAppReceiver">resetLogicAppReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetSmsReceiver">resetSmsReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetVoiceReceiver">resetVoiceReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetWebhookReceiver">resetWebhookReceiver</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArmRoleReceiver` <a name="putArmRoleReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putArmRoleReceiver"></a>

```typescript
public putArmRoleReceiver(value: IResolvable | MonitorActionGroupArmRoleReceiver[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putArmRoleReceiver.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>[]

---

##### `putAutomationRunbookReceiver` <a name="putAutomationRunbookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAutomationRunbookReceiver"></a>

```typescript
public putAutomationRunbookReceiver(value: IResolvable | MonitorActionGroupAutomationRunbookReceiver[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAutomationRunbookReceiver.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>[]

---

##### `putAzureAppPushReceiver` <a name="putAzureAppPushReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureAppPushReceiver"></a>

```typescript
public putAzureAppPushReceiver(value: IResolvable | MonitorActionGroupAzureAppPushReceiver[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureAppPushReceiver.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>[]

---

##### `putAzureFunctionReceiver` <a name="putAzureFunctionReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureFunctionReceiver"></a>

```typescript
public putAzureFunctionReceiver(value: IResolvable | MonitorActionGroupAzureFunctionReceiver[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureFunctionReceiver.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>[]

---

##### `putEmailReceiver` <a name="putEmailReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEmailReceiver"></a>

```typescript
public putEmailReceiver(value: IResolvable | MonitorActionGroupEmailReceiver[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEmailReceiver.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>[]

---

##### `putEventHubReceiver` <a name="putEventHubReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEventHubReceiver"></a>

```typescript
public putEventHubReceiver(value: IResolvable | MonitorActionGroupEventHubReceiver[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEventHubReceiver.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>[]

---

##### `putItsmReceiver` <a name="putItsmReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putItsmReceiver"></a>

```typescript
public putItsmReceiver(value: IResolvable | MonitorActionGroupItsmReceiver[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putItsmReceiver.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>[]

---

##### `putLogicAppReceiver` <a name="putLogicAppReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putLogicAppReceiver"></a>

```typescript
public putLogicAppReceiver(value: IResolvable | MonitorActionGroupLogicAppReceiver[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putLogicAppReceiver.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>[]

---

##### `putSmsReceiver` <a name="putSmsReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putSmsReceiver"></a>

```typescript
public putSmsReceiver(value: IResolvable | MonitorActionGroupSmsReceiver[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putSmsReceiver.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitorActionGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>

---

##### `putVoiceReceiver` <a name="putVoiceReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putVoiceReceiver"></a>

```typescript
public putVoiceReceiver(value: IResolvable | MonitorActionGroupVoiceReceiver[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putVoiceReceiver.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>[]

---

##### `putWebhookReceiver` <a name="putWebhookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putWebhookReceiver"></a>

```typescript
public putWebhookReceiver(value: IResolvable | MonitorActionGroupWebhookReceiver[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putWebhookReceiver.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>[]

---

##### `resetArmRoleReceiver` <a name="resetArmRoleReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetArmRoleReceiver"></a>

```typescript
public resetArmRoleReceiver(): void
```

##### `resetAutomationRunbookReceiver` <a name="resetAutomationRunbookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAutomationRunbookReceiver"></a>

```typescript
public resetAutomationRunbookReceiver(): void
```

##### `resetAzureAppPushReceiver` <a name="resetAzureAppPushReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureAppPushReceiver"></a>

```typescript
public resetAzureAppPushReceiver(): void
```

##### `resetAzureFunctionReceiver` <a name="resetAzureFunctionReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureFunctionReceiver"></a>

```typescript
public resetAzureFunctionReceiver(): void
```

##### `resetEmailReceiver` <a name="resetEmailReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEmailReceiver"></a>

```typescript
public resetEmailReceiver(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEventHubReceiver` <a name="resetEventHubReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEventHubReceiver"></a>

```typescript
public resetEventHubReceiver(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetItsmReceiver` <a name="resetItsmReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetItsmReceiver"></a>

```typescript
public resetItsmReceiver(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetLogicAppReceiver` <a name="resetLogicAppReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLogicAppReceiver"></a>

```typescript
public resetLogicAppReceiver(): void
```

##### `resetSmsReceiver` <a name="resetSmsReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetSmsReceiver"></a>

```typescript
public resetSmsReceiver(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVoiceReceiver` <a name="resetVoiceReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetVoiceReceiver"></a>

```typescript
public resetVoiceReceiver(): void
```

##### `resetWebhookReceiver` <a name="resetWebhookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetWebhookReceiver"></a>

```typescript
public resetWebhookReceiver(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorActionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isConstruct"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

monitorActionGroup.MonitorActionGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformElement"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

monitorActionGroup.MonitorActionGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformResource"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

monitorActionGroup.MonitorActionGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

monitorActionGroup.MonitorActionGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MonitorActionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorActionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorActionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorActionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiver">armRoleReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList">MonitorActionGroupArmRoleReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiver">automationRunbookReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList">MonitorActionGroupAutomationRunbookReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiver">azureAppPushReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList">MonitorActionGroupAzureAppPushReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiver">azureFunctionReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList">MonitorActionGroupAzureFunctionReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiver">emailReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList">MonitorActionGroupEmailReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiver">eventHubReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList">MonitorActionGroupEventHubReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiver">itsmReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList">MonitorActionGroupItsmReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiver">logicAppReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList">MonitorActionGroupLogicAppReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiver">smsReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList">MonitorActionGroupSmsReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference">MonitorActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiver">voiceReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList">MonitorActionGroupVoiceReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiver">webhookReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList">MonitorActionGroupWebhookReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiverInput">armRoleReceiverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiverInput">automationRunbookReceiverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiverInput">azureAppPushReceiverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiverInput">azureFunctionReceiverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiverInput">emailReceiverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiverInput">eventHubReceiverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiverInput">itsmReceiverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiverInput">logicAppReceiverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortNameInput">shortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiverInput">smsReceiverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiverInput">voiceReceiverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiverInput">webhookReceiverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `armRoleReceiver`<sup>Required</sup> <a name="armRoleReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiver"></a>

```typescript
public readonly armRoleReceiver: MonitorActionGroupArmRoleReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList">MonitorActionGroupArmRoleReceiverList</a>

---

##### `automationRunbookReceiver`<sup>Required</sup> <a name="automationRunbookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiver"></a>

```typescript
public readonly automationRunbookReceiver: MonitorActionGroupAutomationRunbookReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList">MonitorActionGroupAutomationRunbookReceiverList</a>

---

##### `azureAppPushReceiver`<sup>Required</sup> <a name="azureAppPushReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiver"></a>

```typescript
public readonly azureAppPushReceiver: MonitorActionGroupAzureAppPushReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList">MonitorActionGroupAzureAppPushReceiverList</a>

---

##### `azureFunctionReceiver`<sup>Required</sup> <a name="azureFunctionReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiver"></a>

```typescript
public readonly azureFunctionReceiver: MonitorActionGroupAzureFunctionReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList">MonitorActionGroupAzureFunctionReceiverList</a>

---

##### `emailReceiver`<sup>Required</sup> <a name="emailReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiver"></a>

```typescript
public readonly emailReceiver: MonitorActionGroupEmailReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList">MonitorActionGroupEmailReceiverList</a>

---

##### `eventHubReceiver`<sup>Required</sup> <a name="eventHubReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiver"></a>

```typescript
public readonly eventHubReceiver: MonitorActionGroupEventHubReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList">MonitorActionGroupEventHubReceiverList</a>

---

##### `itsmReceiver`<sup>Required</sup> <a name="itsmReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiver"></a>

```typescript
public readonly itsmReceiver: MonitorActionGroupItsmReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList">MonitorActionGroupItsmReceiverList</a>

---

##### `logicAppReceiver`<sup>Required</sup> <a name="logicAppReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiver"></a>

```typescript
public readonly logicAppReceiver: MonitorActionGroupLogicAppReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList">MonitorActionGroupLogicAppReceiverList</a>

---

##### `smsReceiver`<sup>Required</sup> <a name="smsReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiver"></a>

```typescript
public readonly smsReceiver: MonitorActionGroupSmsReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList">MonitorActionGroupSmsReceiverList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorActionGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference">MonitorActionGroupTimeoutsOutputReference</a>

---

##### `voiceReceiver`<sup>Required</sup> <a name="voiceReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiver"></a>

```typescript
public readonly voiceReceiver: MonitorActionGroupVoiceReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList">MonitorActionGroupVoiceReceiverList</a>

---

##### `webhookReceiver`<sup>Required</sup> <a name="webhookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiver"></a>

```typescript
public readonly webhookReceiver: MonitorActionGroupWebhookReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList">MonitorActionGroupWebhookReceiverList</a>

---

##### `armRoleReceiverInput`<sup>Optional</sup> <a name="armRoleReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiverInput"></a>

```typescript
public readonly armRoleReceiverInput: IResolvable | MonitorActionGroupArmRoleReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>[]

---

##### `automationRunbookReceiverInput`<sup>Optional</sup> <a name="automationRunbookReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiverInput"></a>

```typescript
public readonly automationRunbookReceiverInput: IResolvable | MonitorActionGroupAutomationRunbookReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>[]

---

##### `azureAppPushReceiverInput`<sup>Optional</sup> <a name="azureAppPushReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiverInput"></a>

```typescript
public readonly azureAppPushReceiverInput: IResolvable | MonitorActionGroupAzureAppPushReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>[]

---

##### `azureFunctionReceiverInput`<sup>Optional</sup> <a name="azureFunctionReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiverInput"></a>

```typescript
public readonly azureFunctionReceiverInput: IResolvable | MonitorActionGroupAzureFunctionReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>[]

---

##### `emailReceiverInput`<sup>Optional</sup> <a name="emailReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiverInput"></a>

```typescript
public readonly emailReceiverInput: IResolvable | MonitorActionGroupEmailReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventHubReceiverInput`<sup>Optional</sup> <a name="eventHubReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiverInput"></a>

```typescript
public readonly eventHubReceiverInput: IResolvable | MonitorActionGroupEventHubReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `itsmReceiverInput`<sup>Optional</sup> <a name="itsmReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiverInput"></a>

```typescript
public readonly itsmReceiverInput: IResolvable | MonitorActionGroupItsmReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logicAppReceiverInput`<sup>Optional</sup> <a name="logicAppReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiverInput"></a>

```typescript
public readonly logicAppReceiverInput: IResolvable | MonitorActionGroupLogicAppReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortNameInput"></a>

```typescript
public readonly shortNameInput: string;
```

- *Type:* string

---

##### `smsReceiverInput`<sup>Optional</sup> <a name="smsReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiverInput"></a>

```typescript
public readonly smsReceiverInput: IResolvable | MonitorActionGroupSmsReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitorActionGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>

---

##### `voiceReceiverInput`<sup>Optional</sup> <a name="voiceReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiverInput"></a>

```typescript
public readonly voiceReceiverInput: IResolvable | MonitorActionGroupVoiceReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>[]

---

##### `webhookReceiverInput`<sup>Optional</sup> <a name="webhookReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiverInput"></a>

```typescript
public readonly webhookReceiverInput: IResolvable | MonitorActionGroupWebhookReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorActionGroupArmRoleReceiver <a name="MonitorActionGroupArmRoleReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupArmRoleReceiver: monitorActionGroup.MonitorActionGroupArmRoleReceiver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.roleId">roleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#role_id MonitorActionGroup#role_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#role_id MonitorActionGroup#role_id}.

---

##### `useCommonAlertSchema`<sup>Optional</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupAutomationRunbookReceiver <a name="MonitorActionGroupAutomationRunbookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupAutomationRunbookReceiver: monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.automationAccountId">automationAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#automation_account_id MonitorActionGroup#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.isGlobalRunbook">isGlobalRunbook</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#is_global_runbook MonitorActionGroup#is_global_runbook}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.runbookName">runbookName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#runbook_name MonitorActionGroup#runbook_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.serviceUri">serviceUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.webhookResourceId">webhookResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#webhook_resource_id MonitorActionGroup#webhook_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.automationAccountId"></a>

```typescript
public readonly automationAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#automation_account_id MonitorActionGroup#automation_account_id}.

---

##### `isGlobalRunbook`<sup>Required</sup> <a name="isGlobalRunbook" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.isGlobalRunbook"></a>

```typescript
public readonly isGlobalRunbook: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#is_global_runbook MonitorActionGroup#is_global_runbook}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `runbookName`<sup>Required</sup> <a name="runbookName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.runbookName"></a>

```typescript
public readonly runbookName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#runbook_name MonitorActionGroup#runbook_name}.

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}.

---

##### `webhookResourceId`<sup>Required</sup> <a name="webhookResourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.webhookResourceId"></a>

```typescript
public readonly webhookResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#webhook_resource_id MonitorActionGroup#webhook_resource_id}.

---

##### `useCommonAlertSchema`<sup>Optional</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupAzureAppPushReceiver <a name="MonitorActionGroupAzureAppPushReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupAzureAppPushReceiver: monitorActionGroup.MonitorActionGroupAzureAppPushReceiver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

### MonitorActionGroupAzureFunctionReceiver <a name="MonitorActionGroupAzureFunctionReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupAzureFunctionReceiver: monitorActionGroup.MonitorActionGroupAzureFunctionReceiver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionAppResourceId">functionAppResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#function_app_resource_id MonitorActionGroup#function_app_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#function_name MonitorActionGroup#function_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.httpTriggerUrl">httpTriggerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#http_trigger_url MonitorActionGroup#http_trigger_url}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `functionAppResourceId`<sup>Required</sup> <a name="functionAppResourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionAppResourceId"></a>

```typescript
public readonly functionAppResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#function_app_resource_id MonitorActionGroup#function_app_resource_id}.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#function_name MonitorActionGroup#function_name}.

---

##### `httpTriggerUrl`<sup>Required</sup> <a name="httpTriggerUrl" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.httpTriggerUrl"></a>

```typescript
public readonly httpTriggerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#http_trigger_url MonitorActionGroup#http_trigger_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `useCommonAlertSchema`<sup>Optional</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupConfig <a name="MonitorActionGroupConfig" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupConfig: monitorActionGroup.MonitorActionGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#resource_group_name MonitorActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.shortName">shortName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#short_name MonitorActionGroup#short_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.armRoleReceiver">armRoleReceiver</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>[]</code> | arm_role_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.automationRunbookReceiver">automationRunbookReceiver</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>[]</code> | automation_runbook_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureAppPushReceiver">azureAppPushReceiver</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>[]</code> | azure_app_push_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureFunctionReceiver">azureFunctionReceiver</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>[]</code> | azure_function_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.emailReceiver">emailReceiver</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>[]</code> | email_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#enabled MonitorActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.eventHubReceiver">eventHubReceiver</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>[]</code> | event_hub_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#id MonitorActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.itsmReceiver">itsmReceiver</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>[]</code> | itsm_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#location MonitorActionGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.logicAppReceiver">logicAppReceiver</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>[]</code> | logic_app_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.smsReceiver">smsReceiver</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>[]</code> | sms_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#tags MonitorActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.voiceReceiver">voiceReceiver</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>[]</code> | voice_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.webhookReceiver">webhookReceiver</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>[]</code> | webhook_receiver block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#resource_group_name MonitorActionGroup#resource_group_name}.

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#short_name MonitorActionGroup#short_name}.

---

##### `armRoleReceiver`<sup>Optional</sup> <a name="armRoleReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.armRoleReceiver"></a>

```typescript
public readonly armRoleReceiver: IResolvable | MonitorActionGroupArmRoleReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>[]

arm_role_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#arm_role_receiver MonitorActionGroup#arm_role_receiver}

---

##### `automationRunbookReceiver`<sup>Optional</sup> <a name="automationRunbookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.automationRunbookReceiver"></a>

```typescript
public readonly automationRunbookReceiver: IResolvable | MonitorActionGroupAutomationRunbookReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>[]

automation_runbook_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#automation_runbook_receiver MonitorActionGroup#automation_runbook_receiver}

---

##### `azureAppPushReceiver`<sup>Optional</sup> <a name="azureAppPushReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureAppPushReceiver"></a>

```typescript
public readonly azureAppPushReceiver: IResolvable | MonitorActionGroupAzureAppPushReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>[]

azure_app_push_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#azure_app_push_receiver MonitorActionGroup#azure_app_push_receiver}

---

##### `azureFunctionReceiver`<sup>Optional</sup> <a name="azureFunctionReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureFunctionReceiver"></a>

```typescript
public readonly azureFunctionReceiver: IResolvable | MonitorActionGroupAzureFunctionReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>[]

azure_function_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#azure_function_receiver MonitorActionGroup#azure_function_receiver}

---

##### `emailReceiver`<sup>Optional</sup> <a name="emailReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.emailReceiver"></a>

```typescript
public readonly emailReceiver: IResolvable | MonitorActionGroupEmailReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>[]

email_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#email_receiver MonitorActionGroup#email_receiver}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#enabled MonitorActionGroup#enabled}.

---

##### `eventHubReceiver`<sup>Optional</sup> <a name="eventHubReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.eventHubReceiver"></a>

```typescript
public readonly eventHubReceiver: IResolvable | MonitorActionGroupEventHubReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>[]

event_hub_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#event_hub_receiver MonitorActionGroup#event_hub_receiver}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#id MonitorActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `itsmReceiver`<sup>Optional</sup> <a name="itsmReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.itsmReceiver"></a>

```typescript
public readonly itsmReceiver: IResolvable | MonitorActionGroupItsmReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>[]

itsm_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#itsm_receiver MonitorActionGroup#itsm_receiver}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#location MonitorActionGroup#location}.

---

##### `logicAppReceiver`<sup>Optional</sup> <a name="logicAppReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.logicAppReceiver"></a>

```typescript
public readonly logicAppReceiver: IResolvable | MonitorActionGroupLogicAppReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>[]

logic_app_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#logic_app_receiver MonitorActionGroup#logic_app_receiver}

---

##### `smsReceiver`<sup>Optional</sup> <a name="smsReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.smsReceiver"></a>

```typescript
public readonly smsReceiver: IResolvable | MonitorActionGroupSmsReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>[]

sms_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#sms_receiver MonitorActionGroup#sms_receiver}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#tags MonitorActionGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorActionGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#timeouts MonitorActionGroup#timeouts}

---

##### `voiceReceiver`<sup>Optional</sup> <a name="voiceReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.voiceReceiver"></a>

```typescript
public readonly voiceReceiver: IResolvable | MonitorActionGroupVoiceReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>[]

voice_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#voice_receiver MonitorActionGroup#voice_receiver}

---

##### `webhookReceiver`<sup>Optional</sup> <a name="webhookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.webhookReceiver"></a>

```typescript
public readonly webhookReceiver: IResolvable | MonitorActionGroupWebhookReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>[]

webhook_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#webhook_receiver MonitorActionGroup#webhook_receiver}

---

### MonitorActionGroupEmailReceiver <a name="MonitorActionGroupEmailReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupEmailReceiver: monitorActionGroup.MonitorActionGroupEmailReceiver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `useCommonAlertSchema`<sup>Optional</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupEventHubReceiver <a name="MonitorActionGroupEventHubReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupEventHubReceiver: monitorActionGroup.MonitorActionGroupEventHubReceiver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubName">eventHubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#event_hub_name MonitorActionGroup#event_hub_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubNamespace">eventHubNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#event_hub_namespace MonitorActionGroup#event_hub_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#subscription_id MonitorActionGroup#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `eventHubName`<sup>Required</sup> <a name="eventHubName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubName"></a>

```typescript
public readonly eventHubName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#event_hub_name MonitorActionGroup#event_hub_name}.

---

##### `eventHubNamespace`<sup>Required</sup> <a name="eventHubNamespace" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubNamespace"></a>

```typescript
public readonly eventHubNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#event_hub_namespace MonitorActionGroup#event_hub_namespace}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#subscription_id MonitorActionGroup#subscription_id}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}.

---

##### `useCommonAlertSchema`<sup>Optional</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupItsmReceiver <a name="MonitorActionGroupItsmReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupItsmReceiver: monitorActionGroup.MonitorActionGroupItsmReceiver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#connection_id MonitorActionGroup#connection_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#region MonitorActionGroup#region}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.ticketConfiguration">ticketConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#ticket_configuration MonitorActionGroup#ticket_configuration}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#workspace_id MonitorActionGroup#workspace_id}. |

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#connection_id MonitorActionGroup#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#region MonitorActionGroup#region}.

---

##### `ticketConfiguration`<sup>Required</sup> <a name="ticketConfiguration" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.ticketConfiguration"></a>

```typescript
public readonly ticketConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#ticket_configuration MonitorActionGroup#ticket_configuration}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#workspace_id MonitorActionGroup#workspace_id}.

---

### MonitorActionGroupLogicAppReceiver <a name="MonitorActionGroupLogicAppReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupLogicAppReceiver: monitorActionGroup.MonitorActionGroupLogicAppReceiver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.callbackUrl">callbackUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#callback_url MonitorActionGroup#callback_url}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#resource_id MonitorActionGroup#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `callbackUrl`<sup>Required</sup> <a name="callbackUrl" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.callbackUrl"></a>

```typescript
public readonly callbackUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#callback_url MonitorActionGroup#callback_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#resource_id MonitorActionGroup#resource_id}.

---

##### `useCommonAlertSchema`<sup>Optional</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupSmsReceiver <a name="MonitorActionGroupSmsReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupSmsReceiver: monitorActionGroup.MonitorActionGroupSmsReceiver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}. |

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}.

---

### MonitorActionGroupTimeouts <a name="MonitorActionGroupTimeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupTimeouts: monitorActionGroup.MonitorActionGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#create MonitorActionGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#delete MonitorActionGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#read MonitorActionGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#update MonitorActionGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#create MonitorActionGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#delete MonitorActionGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#read MonitorActionGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#update MonitorActionGroup#update}.

---

### MonitorActionGroupVoiceReceiver <a name="MonitorActionGroupVoiceReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupVoiceReceiver: monitorActionGroup.MonitorActionGroupVoiceReceiver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}. |

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}.

---

### MonitorActionGroupWebhookReceiver <a name="MonitorActionGroupWebhookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupWebhookReceiver: monitorActionGroup.MonitorActionGroupWebhookReceiver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.serviceUri">serviceUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.aadAuth">aadAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a></code> | aad_auth block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}.

---

##### `aadAuth`<sup>Optional</sup> <a name="aadAuth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.aadAuth"></a>

```typescript
public readonly aadAuth: MonitorActionGroupWebhookReceiverAadAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a>

aad_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#aad_auth MonitorActionGroup#aad_auth}

---

##### `useCommonAlertSchema`<sup>Optional</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupWebhookReceiverAadAuth <a name="MonitorActionGroupWebhookReceiverAadAuth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

const monitorActionGroupWebhookReceiverAadAuth: monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#object_id MonitorActionGroup#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.identifierUri">identifierUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#identifier_uri MonitorActionGroup#identifier_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}. |

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#object_id MonitorActionGroup#object_id}.

---

##### `identifierUri`<sup>Optional</sup> <a name="identifierUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.identifierUri"></a>

```typescript
public readonly identifierUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#identifier_uri MonitorActionGroup#identifier_uri}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorActionGroupArmRoleReceiverList <a name="MonitorActionGroupArmRoleReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupArmRoleReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.get"></a>

```typescript
public get(index: number): MonitorActionGroupArmRoleReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupArmRoleReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>[]

---


### MonitorActionGroupArmRoleReceiverOutputReference <a name="MonitorActionGroupArmRoleReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resetUseCommonAlertSchema">resetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseCommonAlertSchema` <a name="resetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resetUseCommonAlertSchema"></a>

```typescript
public resetUseCommonAlertSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleIdInput">roleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchemaInput">useCommonAlertSchemaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleIdInput"></a>

```typescript
public readonly roleIdInput: string;
```

- *Type:* string

---

##### `useCommonAlertSchemaInput`<sup>Optional</sup> <a name="useCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```typescript
public readonly useCommonAlertSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupArmRoleReceiver;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>

---


### MonitorActionGroupAutomationRunbookReceiverList <a name="MonitorActionGroupAutomationRunbookReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.get"></a>

```typescript
public get(index: number): MonitorActionGroupAutomationRunbookReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupAutomationRunbookReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>[]

---


### MonitorActionGroupAutomationRunbookReceiverOutputReference <a name="MonitorActionGroupAutomationRunbookReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resetUseCommonAlertSchema">resetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseCommonAlertSchema` <a name="resetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resetUseCommonAlertSchema"></a>

```typescript
public resetUseCommonAlertSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountIdInput">automationAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbookInput">isGlobalRunbookInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookNameInput">runbookNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUriInput">serviceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchemaInput">useCommonAlertSchemaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceIdInput">webhookResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountId">automationAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbook">isGlobalRunbook</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookName">runbookName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUri">serviceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceId">webhookResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automationAccountIdInput`<sup>Optional</sup> <a name="automationAccountIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountIdInput"></a>

```typescript
public readonly automationAccountIdInput: string;
```

- *Type:* string

---

##### `isGlobalRunbookInput`<sup>Optional</sup> <a name="isGlobalRunbookInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbookInput"></a>

```typescript
public readonly isGlobalRunbookInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `runbookNameInput`<sup>Optional</sup> <a name="runbookNameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookNameInput"></a>

```typescript
public readonly runbookNameInput: string;
```

- *Type:* string

---

##### `serviceUriInput`<sup>Optional</sup> <a name="serviceUriInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUriInput"></a>

```typescript
public readonly serviceUriInput: string;
```

- *Type:* string

---

##### `useCommonAlertSchemaInput`<sup>Optional</sup> <a name="useCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```typescript
public readonly useCommonAlertSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webhookResourceIdInput`<sup>Optional</sup> <a name="webhookResourceIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceIdInput"></a>

```typescript
public readonly webhookResourceIdInput: string;
```

- *Type:* string

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountId"></a>

```typescript
public readonly automationAccountId: string;
```

- *Type:* string

---

##### `isGlobalRunbook`<sup>Required</sup> <a name="isGlobalRunbook" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbook"></a>

```typescript
public readonly isGlobalRunbook: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runbookName`<sup>Required</sup> <a name="runbookName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookName"></a>

```typescript
public readonly runbookName: string;
```

- *Type:* string

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webhookResourceId`<sup>Required</sup> <a name="webhookResourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceId"></a>

```typescript
public readonly webhookResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupAutomationRunbookReceiver;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>

---


### MonitorActionGroupAzureAppPushReceiverList <a name="MonitorActionGroupAzureAppPushReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.get"></a>

```typescript
public get(index: number): MonitorActionGroupAzureAppPushReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupAzureAppPushReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>[]

---


### MonitorActionGroupAzureAppPushReceiverOutputReference <a name="MonitorActionGroupAzureAppPushReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupAzureAppPushReceiver;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>

---


### MonitorActionGroupAzureFunctionReceiverList <a name="MonitorActionGroupAzureFunctionReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.get"></a>

```typescript
public get(index: number): MonitorActionGroupAzureFunctionReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupAzureFunctionReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>[]

---


### MonitorActionGroupAzureFunctionReceiverOutputReference <a name="MonitorActionGroupAzureFunctionReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resetUseCommonAlertSchema">resetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseCommonAlertSchema` <a name="resetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resetUseCommonAlertSchema"></a>

```typescript
public resetUseCommonAlertSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceIdInput">functionAppResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrlInput">httpTriggerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchemaInput">useCommonAlertSchemaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceId">functionAppResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrl">httpTriggerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionAppResourceIdInput`<sup>Optional</sup> <a name="functionAppResourceIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceIdInput"></a>

```typescript
public readonly functionAppResourceIdInput: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `httpTriggerUrlInput`<sup>Optional</sup> <a name="httpTriggerUrlInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrlInput"></a>

```typescript
public readonly httpTriggerUrlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `useCommonAlertSchemaInput`<sup>Optional</sup> <a name="useCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```typescript
public readonly useCommonAlertSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionAppResourceId`<sup>Required</sup> <a name="functionAppResourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceId"></a>

```typescript
public readonly functionAppResourceId: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `httpTriggerUrl`<sup>Required</sup> <a name="httpTriggerUrl" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrl"></a>

```typescript
public readonly httpTriggerUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupAzureFunctionReceiver;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>

---


### MonitorActionGroupEmailReceiverList <a name="MonitorActionGroupEmailReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupEmailReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.get"></a>

```typescript
public get(index: number): MonitorActionGroupEmailReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupEmailReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>[]

---


### MonitorActionGroupEmailReceiverOutputReference <a name="MonitorActionGroupEmailReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resetUseCommonAlertSchema">resetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseCommonAlertSchema` <a name="resetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resetUseCommonAlertSchema"></a>

```typescript
public resetUseCommonAlertSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchemaInput">useCommonAlertSchemaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `useCommonAlertSchemaInput`<sup>Optional</sup> <a name="useCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```typescript
public readonly useCommonAlertSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupEmailReceiver;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>

---


### MonitorActionGroupEventHubReceiverList <a name="MonitorActionGroupEventHubReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupEventHubReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.get"></a>

```typescript
public get(index: number): MonitorActionGroupEventHubReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupEventHubReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>[]

---


### MonitorActionGroupEventHubReceiverOutputReference <a name="MonitorActionGroupEventHubReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetUseCommonAlertSchema">resetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetUseCommonAlertSchema` <a name="resetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetUseCommonAlertSchema"></a>

```typescript
public resetUseCommonAlertSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNameInput">eventHubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespaceInput">eventHubNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchemaInput">useCommonAlertSchemaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubName">eventHubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespace">eventHubNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventHubNameInput`<sup>Optional</sup> <a name="eventHubNameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNameInput"></a>

```typescript
public readonly eventHubNameInput: string;
```

- *Type:* string

---

##### `eventHubNamespaceInput`<sup>Optional</sup> <a name="eventHubNamespaceInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespaceInput"></a>

```typescript
public readonly eventHubNamespaceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `useCommonAlertSchemaInput`<sup>Optional</sup> <a name="useCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```typescript
public readonly useCommonAlertSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventHubName`<sup>Required</sup> <a name="eventHubName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubName"></a>

```typescript
public readonly eventHubName: string;
```

- *Type:* string

---

##### `eventHubNamespace`<sup>Required</sup> <a name="eventHubNamespace" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespace"></a>

```typescript
public readonly eventHubNamespace: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupEventHubReceiver;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>

---


### MonitorActionGroupItsmReceiverList <a name="MonitorActionGroupItsmReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupItsmReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.get"></a>

```typescript
public get(index: number): MonitorActionGroupItsmReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupItsmReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>[]

---


### MonitorActionGroupItsmReceiverOutputReference <a name="MonitorActionGroupItsmReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfigurationInput">ticketConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfiguration">ticketConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ticketConfigurationInput`<sup>Optional</sup> <a name="ticketConfigurationInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfigurationInput"></a>

```typescript
public readonly ticketConfigurationInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `ticketConfiguration`<sup>Required</sup> <a name="ticketConfiguration" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfiguration"></a>

```typescript
public readonly ticketConfiguration: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupItsmReceiver;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>

---


### MonitorActionGroupLogicAppReceiverList <a name="MonitorActionGroupLogicAppReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupLogicAppReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.get"></a>

```typescript
public get(index: number): MonitorActionGroupLogicAppReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupLogicAppReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>[]

---


### MonitorActionGroupLogicAppReceiverOutputReference <a name="MonitorActionGroupLogicAppReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resetUseCommonAlertSchema">resetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseCommonAlertSchema` <a name="resetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resetUseCommonAlertSchema"></a>

```typescript
public resetUseCommonAlertSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrlInput">callbackUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchemaInput">useCommonAlertSchemaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrl">callbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `callbackUrlInput`<sup>Optional</sup> <a name="callbackUrlInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrlInput"></a>

```typescript
public readonly callbackUrlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `useCommonAlertSchemaInput`<sup>Optional</sup> <a name="useCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```typescript
public readonly useCommonAlertSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `callbackUrl`<sup>Required</sup> <a name="callbackUrl" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrl"></a>

```typescript
public readonly callbackUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupLogicAppReceiver;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>

---


### MonitorActionGroupSmsReceiverList <a name="MonitorActionGroupSmsReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupSmsReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.get"></a>

```typescript
public get(index: number): MonitorActionGroupSmsReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupSmsReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>[]

---


### MonitorActionGroupSmsReceiverOutputReference <a name="MonitorActionGroupSmsReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupSmsReceiver;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>

---


### MonitorActionGroupTimeoutsOutputReference <a name="MonitorActionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>

---


### MonitorActionGroupVoiceReceiverList <a name="MonitorActionGroupVoiceReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupVoiceReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.get"></a>

```typescript
public get(index: number): MonitorActionGroupVoiceReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupVoiceReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>[]

---


### MonitorActionGroupVoiceReceiverOutputReference <a name="MonitorActionGroupVoiceReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupVoiceReceiver;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>

---


### MonitorActionGroupWebhookReceiverAadAuthOutputReference <a name="MonitorActionGroupWebhookReceiverAadAuthOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetIdentifierUri">resetIdentifierUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentifierUri` <a name="resetIdentifierUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetIdentifierUri"></a>

```typescript
public resetIdentifierUri(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUriInput">identifierUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUri">identifierUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierUriInput`<sup>Optional</sup> <a name="identifierUriInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUriInput"></a>

```typescript
public readonly identifierUriInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `identifierUri`<sup>Required</sup> <a name="identifierUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUri"></a>

```typescript
public readonly identifierUri: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorActionGroupWebhookReceiverAadAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a>

---


### MonitorActionGroupWebhookReceiverList <a name="MonitorActionGroupWebhookReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupWebhookReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.get"></a>

```typescript
public get(index: number): MonitorActionGroupWebhookReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupWebhookReceiver[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>[]

---


### MonitorActionGroupWebhookReceiverOutputReference <a name="MonitorActionGroupWebhookReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer"></a>

```typescript
import { monitorActionGroup } from '@cdktf/provider-azurerm'

new monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.putAadAuth">putAadAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetAadAuth">resetAadAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetUseCommonAlertSchema">resetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAadAuth` <a name="putAadAuth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.putAadAuth"></a>

```typescript
public putAadAuth(value: MonitorActionGroupWebhookReceiverAadAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.putAadAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a>

---

##### `resetAadAuth` <a name="resetAadAuth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetAadAuth"></a>

```typescript
public resetAadAuth(): void
```

##### `resetUseCommonAlertSchema` <a name="resetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetUseCommonAlertSchema"></a>

```typescript
public resetUseCommonAlertSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuth">aadAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference">MonitorActionGroupWebhookReceiverAadAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuthInput">aadAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUriInput">serviceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchemaInput">useCommonAlertSchemaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUri">serviceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aadAuth`<sup>Required</sup> <a name="aadAuth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuth"></a>

```typescript
public readonly aadAuth: MonitorActionGroupWebhookReceiverAadAuthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference">MonitorActionGroupWebhookReceiverAadAuthOutputReference</a>

---

##### `aadAuthInput`<sup>Optional</sup> <a name="aadAuthInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuthInput"></a>

```typescript
public readonly aadAuthInput: MonitorActionGroupWebhookReceiverAadAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceUriInput`<sup>Optional</sup> <a name="serviceUriInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUriInput"></a>

```typescript
public readonly serviceUriInput: string;
```

- *Type:* string

---

##### `useCommonAlertSchemaInput`<sup>Optional</sup> <a name="useCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```typescript
public readonly useCommonAlertSchemaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorActionGroupWebhookReceiver;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>

---



