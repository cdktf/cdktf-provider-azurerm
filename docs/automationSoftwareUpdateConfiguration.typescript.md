# `automationSoftwareUpdateConfiguration` Submodule <a name="`automationSoftwareUpdateConfiguration` Submodule" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationSoftwareUpdateConfiguration <a name="AutomationSoftwareUpdateConfiguration" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration azurerm_automation_software_update_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration(scope: Construct, id: string, config: AutomationSoftwareUpdateConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig">AutomationSoftwareUpdateConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig">AutomationSoftwareUpdateConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putLinux">putLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPostTask">putPostTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPreTask">putPreTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putWindows">putWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetLinux">resetLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetNonAzureComputerNames">resetNonAzureComputerNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetPostTask">resetPostTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetPreTask">resetPreTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetVirtualMachineIds">resetVirtualMachineIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetWindows">resetWindows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLinux` <a name="putLinux" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putLinux"></a>

```typescript
public putLinux(value: AutomationSoftwareUpdateConfigurationLinux): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putLinux.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a>

---

##### `putPostTask` <a name="putPostTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPostTask"></a>

```typescript
public putPostTask(value: AutomationSoftwareUpdateConfigurationPostTask): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPostTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a>

---

##### `putPreTask` <a name="putPreTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPreTask"></a>

```typescript
public putPreTask(value: AutomationSoftwareUpdateConfigurationPreTask): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putPreTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putSchedule"></a>

```typescript
public putSchedule(value: AutomationSoftwareUpdateConfigurationSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTarget"></a>

```typescript
public putTarget(value: AutomationSoftwareUpdateConfigurationTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: AutomationSoftwareUpdateConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts">AutomationSoftwareUpdateConfigurationTimeouts</a>

---

##### `putWindows` <a name="putWindows" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putWindows"></a>

```typescript
public putWindows(value: AutomationSoftwareUpdateConfigurationWindows): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.putWindows.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLinux` <a name="resetLinux" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetLinux"></a>

```typescript
public resetLinux(): void
```

##### `resetNonAzureComputerNames` <a name="resetNonAzureComputerNames" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetNonAzureComputerNames"></a>

```typescript
public resetNonAzureComputerNames(): void
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

##### `resetPostTask` <a name="resetPostTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetPostTask"></a>

```typescript
public resetPostTask(): void
```

##### `resetPreTask` <a name="resetPreTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetPreTask"></a>

```typescript
public resetPreTask(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualMachineIds` <a name="resetVirtualMachineIds" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetVirtualMachineIds"></a>

```typescript
public resetVirtualMachineIds(): void
```

##### `resetWindows` <a name="resetWindows" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.resetWindows"></a>

```typescript
public resetWindows(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationSoftwareUpdateConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isConstruct"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformElement"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformResource"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.generateConfigForImport"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AutomationSoftwareUpdateConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomationSoftwareUpdateConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomationSoftwareUpdateConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutomationSoftwareUpdateConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorCode">errorCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorMeesage">errorMeesage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.linux">linux</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference">AutomationSoftwareUpdateConfigurationLinuxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.postTask">postTask</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference">AutomationSoftwareUpdateConfigurationPostTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.preTask">preTask</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference">AutomationSoftwareUpdateConfigurationPreTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference">AutomationSoftwareUpdateConfigurationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.target">target</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference">AutomationSoftwareUpdateConfigurationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference">AutomationSoftwareUpdateConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.windows">windows</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference">AutomationSoftwareUpdateConfigurationWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.automationAccountIdInput">automationAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.linuxInput">linuxInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nonAzureComputerNamesInput">nonAzureComputerNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.postTaskInput">postTaskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.preTaskInput">preTaskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts">AutomationSoftwareUpdateConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.virtualMachineIdsInput">virtualMachineIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.windowsInput">windowsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.automationAccountId">automationAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nonAzureComputerNames">nonAzureComputerNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.virtualMachineIds">virtualMachineIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `errorCode`<sup>Required</sup> <a name="errorCode" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorCode"></a>

```typescript
public readonly errorCode: string;
```

- *Type:* string

---

##### `errorMeesage`<sup>Required</sup> <a name="errorMeesage" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorMeesage"></a>

```typescript
public readonly errorMeesage: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `linux`<sup>Required</sup> <a name="linux" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.linux"></a>

```typescript
public readonly linux: AutomationSoftwareUpdateConfigurationLinuxOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference">AutomationSoftwareUpdateConfigurationLinuxOutputReference</a>

---

##### `postTask`<sup>Required</sup> <a name="postTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.postTask"></a>

```typescript
public readonly postTask: AutomationSoftwareUpdateConfigurationPostTaskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference">AutomationSoftwareUpdateConfigurationPostTaskOutputReference</a>

---

##### `preTask`<sup>Required</sup> <a name="preTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.preTask"></a>

```typescript
public readonly preTask: AutomationSoftwareUpdateConfigurationPreTaskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference">AutomationSoftwareUpdateConfigurationPreTaskOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.schedule"></a>

```typescript
public readonly schedule: AutomationSoftwareUpdateConfigurationScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference">AutomationSoftwareUpdateConfigurationScheduleOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.target"></a>

```typescript
public readonly target: AutomationSoftwareUpdateConfigurationTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference">AutomationSoftwareUpdateConfigurationTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationSoftwareUpdateConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference">AutomationSoftwareUpdateConfigurationTimeoutsOutputReference</a>

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.windows"></a>

```typescript
public readonly windows: AutomationSoftwareUpdateConfigurationWindowsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference">AutomationSoftwareUpdateConfigurationWindowsOutputReference</a>

---

##### `automationAccountIdInput`<sup>Optional</sup> <a name="automationAccountIdInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.automationAccountIdInput"></a>

```typescript
public readonly automationAccountIdInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linuxInput`<sup>Optional</sup> <a name="linuxInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.linuxInput"></a>

```typescript
public readonly linuxInput: AutomationSoftwareUpdateConfigurationLinux;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nonAzureComputerNamesInput`<sup>Optional</sup> <a name="nonAzureComputerNamesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nonAzureComputerNamesInput"></a>

```typescript
public readonly nonAzureComputerNamesInput: string[];
```

- *Type:* string[]

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `postTaskInput`<sup>Optional</sup> <a name="postTaskInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.postTaskInput"></a>

```typescript
public readonly postTaskInput: AutomationSoftwareUpdateConfigurationPostTask;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a>

---

##### `preTaskInput`<sup>Optional</sup> <a name="preTaskInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.preTaskInput"></a>

```typescript
public readonly preTaskInput: AutomationSoftwareUpdateConfigurationPreTask;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: AutomationSoftwareUpdateConfigurationSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.targetInput"></a>

```typescript
public readonly targetInput: AutomationSoftwareUpdateConfigurationTarget;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AutomationSoftwareUpdateConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts">AutomationSoftwareUpdateConfigurationTimeouts</a>

---

##### `virtualMachineIdsInput`<sup>Optional</sup> <a name="virtualMachineIdsInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.virtualMachineIdsInput"></a>

```typescript
public readonly virtualMachineIdsInput: string[];
```

- *Type:* string[]

---

##### `windowsInput`<sup>Optional</sup> <a name="windowsInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.windowsInput"></a>

```typescript
public readonly windowsInput: AutomationSoftwareUpdateConfigurationWindows;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a>

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.automationAccountId"></a>

```typescript
public readonly automationAccountId: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nonAzureComputerNames`<sup>Required</sup> <a name="nonAzureComputerNames" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.nonAzureComputerNames"></a>

```typescript
public readonly nonAzureComputerNames: string[];
```

- *Type:* string[]

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `virtualMachineIds`<sup>Required</sup> <a name="virtualMachineIds" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.virtualMachineIds"></a>

```typescript
public readonly virtualMachineIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationSoftwareUpdateConfigurationConfig <a name="AutomationSoftwareUpdateConfigurationConfig" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationConfig: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.automationAccountId">automationAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#automation_account_id AutomationSoftwareUpdateConfiguration#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#name AutomationSoftwareUpdateConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#duration AutomationSoftwareUpdateConfiguration#duration}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#id AutomationSoftwareUpdateConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.linux">linux</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a></code> | linux block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.nonAzureComputerNames">nonAzureComputerNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#non_azure_computer_names AutomationSoftwareUpdateConfiguration#non_azure_computer_names}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#operating_system AutomationSoftwareUpdateConfiguration#operating_system}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.postTask">postTask</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a></code> | post_task block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.preTask">preTask</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a></code> | pre_task block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts">AutomationSoftwareUpdateConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.virtualMachineIds">virtualMachineIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#virtual_machine_ids AutomationSoftwareUpdateConfiguration#virtual_machine_ids}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.windows">windows</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a></code> | windows block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.automationAccountId"></a>

```typescript
public readonly automationAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#automation_account_id AutomationSoftwareUpdateConfiguration#automation_account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#name AutomationSoftwareUpdateConfiguration#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.schedule"></a>

```typescript
public readonly schedule: AutomationSoftwareUpdateConfigurationSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#schedule AutomationSoftwareUpdateConfiguration#schedule}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#duration AutomationSoftwareUpdateConfiguration#duration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#id AutomationSoftwareUpdateConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linux`<sup>Optional</sup> <a name="linux" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.linux"></a>

```typescript
public readonly linux: AutomationSoftwareUpdateConfigurationLinux;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a>

linux block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#linux AutomationSoftwareUpdateConfiguration#linux}

---

##### `nonAzureComputerNames`<sup>Optional</sup> <a name="nonAzureComputerNames" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.nonAzureComputerNames"></a>

```typescript
public readonly nonAzureComputerNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#non_azure_computer_names AutomationSoftwareUpdateConfiguration#non_azure_computer_names}.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#operating_system AutomationSoftwareUpdateConfiguration#operating_system}.

---

##### `postTask`<sup>Optional</sup> <a name="postTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.postTask"></a>

```typescript
public readonly postTask: AutomationSoftwareUpdateConfigurationPostTask;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a>

post_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#post_task AutomationSoftwareUpdateConfiguration#post_task}

---

##### `preTask`<sup>Optional</sup> <a name="preTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.preTask"></a>

```typescript
public readonly preTask: AutomationSoftwareUpdateConfigurationPreTask;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a>

pre_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#pre_task AutomationSoftwareUpdateConfiguration#pre_task}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.target"></a>

```typescript
public readonly target: AutomationSoftwareUpdateConfigurationTarget;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#target AutomationSoftwareUpdateConfiguration#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationSoftwareUpdateConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts">AutomationSoftwareUpdateConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#timeouts AutomationSoftwareUpdateConfiguration#timeouts}

---

##### `virtualMachineIds`<sup>Optional</sup> <a name="virtualMachineIds" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.virtualMachineIds"></a>

```typescript
public readonly virtualMachineIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#virtual_machine_ids AutomationSoftwareUpdateConfiguration#virtual_machine_ids}.

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationConfig.property.windows"></a>

```typescript
public readonly windows: AutomationSoftwareUpdateConfigurationWindows;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a>

windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#windows AutomationSoftwareUpdateConfiguration#windows}

---

### AutomationSoftwareUpdateConfigurationLinux <a name="AutomationSoftwareUpdateConfigurationLinux" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationLinux: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.classificationIncluded">classificationIncluded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#classification_included AutomationSoftwareUpdateConfiguration#classification_included}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.classificationsIncluded">classificationsIncluded</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#classifications_included AutomationSoftwareUpdateConfiguration#classifications_included}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.excludedPackages">excludedPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#excluded_packages AutomationSoftwareUpdateConfiguration#excluded_packages}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.includedPackages">includedPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#included_packages AutomationSoftwareUpdateConfiguration#included_packages}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.reboot">reboot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#reboot AutomationSoftwareUpdateConfiguration#reboot}. |

---

##### `classificationIncluded`<sup>Optional</sup> <a name="classificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.classificationIncluded"></a>

```typescript
public readonly classificationIncluded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#classification_included AutomationSoftwareUpdateConfiguration#classification_included}.

---

##### `classificationsIncluded`<sup>Optional</sup> <a name="classificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.classificationsIncluded"></a>

```typescript
public readonly classificationsIncluded: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#classifications_included AutomationSoftwareUpdateConfiguration#classifications_included}.

---

##### `excludedPackages`<sup>Optional</sup> <a name="excludedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.excludedPackages"></a>

```typescript
public readonly excludedPackages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#excluded_packages AutomationSoftwareUpdateConfiguration#excluded_packages}.

---

##### `includedPackages`<sup>Optional</sup> <a name="includedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.includedPackages"></a>

```typescript
public readonly includedPackages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#included_packages AutomationSoftwareUpdateConfiguration#included_packages}.

---

##### `reboot`<sup>Optional</sup> <a name="reboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux.property.reboot"></a>

```typescript
public readonly reboot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#reboot AutomationSoftwareUpdateConfiguration#reboot}.

---

### AutomationSoftwareUpdateConfigurationPostTask <a name="AutomationSoftwareUpdateConfigurationPostTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationPostTask: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#parameters AutomationSoftwareUpdateConfiguration#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#source AutomationSoftwareUpdateConfiguration#source}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#parameters AutomationSoftwareUpdateConfiguration#parameters}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#source AutomationSoftwareUpdateConfiguration#source}.

---

### AutomationSoftwareUpdateConfigurationPreTask <a name="AutomationSoftwareUpdateConfigurationPreTask" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationPreTask: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#parameters AutomationSoftwareUpdateConfiguration#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#source AutomationSoftwareUpdateConfiguration#source}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#parameters AutomationSoftwareUpdateConfiguration#parameters}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#source AutomationSoftwareUpdateConfiguration#source}.

---

### AutomationSoftwareUpdateConfigurationSchedule <a name="AutomationSoftwareUpdateConfigurationSchedule" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationSchedule: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#frequency AutomationSoftwareUpdateConfiguration#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.advancedMonthDays">advancedMonthDays</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#advanced_month_days AutomationSoftwareUpdateConfiguration#advanced_month_days}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.advancedWeekDays">advancedWeekDays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#advanced_week_days AutomationSoftwareUpdateConfiguration#advanced_week_days}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#description AutomationSoftwareUpdateConfiguration#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.expiryTime">expiryTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#expiry_time AutomationSoftwareUpdateConfiguration#expiry_time}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.expiryTimeOffsetMinutes">expiryTimeOffsetMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#expiry_time_offset_minutes AutomationSoftwareUpdateConfiguration#expiry_time_offset_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#interval AutomationSoftwareUpdateConfiguration#interval}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#is_enabled AutomationSoftwareUpdateConfiguration#is_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.monthlyOccurrence">monthlyOccurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a></code> | monthly_occurrence block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.nextRun">nextRun</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#next_run AutomationSoftwareUpdateConfiguration#next_run}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.nextRunOffsetMinutes">nextRunOffsetMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#next_run_offset_minutes AutomationSoftwareUpdateConfiguration#next_run_offset_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#start_time AutomationSoftwareUpdateConfiguration#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.startTimeOffsetMinutes">startTimeOffsetMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#start_time_offset_minutes AutomationSoftwareUpdateConfiguration#start_time_offset_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#time_zone AutomationSoftwareUpdateConfiguration#time_zone}. |

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#frequency AutomationSoftwareUpdateConfiguration#frequency}.

---

##### `advancedMonthDays`<sup>Optional</sup> <a name="advancedMonthDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.advancedMonthDays"></a>

```typescript
public readonly advancedMonthDays: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#advanced_month_days AutomationSoftwareUpdateConfiguration#advanced_month_days}.

---

##### `advancedWeekDays`<sup>Optional</sup> <a name="advancedWeekDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.advancedWeekDays"></a>

```typescript
public readonly advancedWeekDays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#advanced_week_days AutomationSoftwareUpdateConfiguration#advanced_week_days}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#description AutomationSoftwareUpdateConfiguration#description}.

---

##### `expiryTime`<sup>Optional</sup> <a name="expiryTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.expiryTime"></a>

```typescript
public readonly expiryTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#expiry_time AutomationSoftwareUpdateConfiguration#expiry_time}.

---

##### `expiryTimeOffsetMinutes`<sup>Optional</sup> <a name="expiryTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.expiryTimeOffsetMinutes"></a>

```typescript
public readonly expiryTimeOffsetMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#expiry_time_offset_minutes AutomationSoftwareUpdateConfiguration#expiry_time_offset_minutes}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#interval AutomationSoftwareUpdateConfiguration#interval}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#is_enabled AutomationSoftwareUpdateConfiguration#is_enabled}.

---

##### `monthlyOccurrence`<sup>Optional</sup> <a name="monthlyOccurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.monthlyOccurrence"></a>

```typescript
public readonly monthlyOccurrence: AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a>

monthly_occurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#monthly_occurrence AutomationSoftwareUpdateConfiguration#monthly_occurrence}

---

##### `nextRun`<sup>Optional</sup> <a name="nextRun" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.nextRun"></a>

```typescript
public readonly nextRun: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#next_run AutomationSoftwareUpdateConfiguration#next_run}.

---

##### `nextRunOffsetMinutes`<sup>Optional</sup> <a name="nextRunOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.nextRunOffsetMinutes"></a>

```typescript
public readonly nextRunOffsetMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#next_run_offset_minutes AutomationSoftwareUpdateConfiguration#next_run_offset_minutes}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#start_time AutomationSoftwareUpdateConfiguration#start_time}.

---

##### `startTimeOffsetMinutes`<sup>Optional</sup> <a name="startTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.startTimeOffsetMinutes"></a>

```typescript
public readonly startTimeOffsetMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#start_time_offset_minutes AutomationSoftwareUpdateConfiguration#start_time_offset_minutes}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#time_zone AutomationSoftwareUpdateConfiguration#time_zone}.

---

### AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence <a name="AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationScheduleMonthlyOccurrence: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence.property.day">day</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#day AutomationSoftwareUpdateConfiguration#day}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence.property.occurrence">occurrence</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#occurrence AutomationSoftwareUpdateConfiguration#occurrence}. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#day AutomationSoftwareUpdateConfiguration#day}.

---

##### `occurrence`<sup>Required</sup> <a name="occurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence.property.occurrence"></a>

```typescript
public readonly occurrence: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#occurrence AutomationSoftwareUpdateConfiguration#occurrence}.

---

### AutomationSoftwareUpdateConfigurationTarget <a name="AutomationSoftwareUpdateConfigurationTarget" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationTarget: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget.property.azureQuery">azureQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery">AutomationSoftwareUpdateConfigurationTargetAzureQuery</a>[]</code> | azure_query block. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget.property.nonAzureQuery">nonAzureQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery">AutomationSoftwareUpdateConfigurationTargetNonAzureQuery</a>[]</code> | non_azure_query block. |

---

##### `azureQuery`<sup>Optional</sup> <a name="azureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget.property.azureQuery"></a>

```typescript
public readonly azureQuery: IResolvable | AutomationSoftwareUpdateConfigurationTargetAzureQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery">AutomationSoftwareUpdateConfigurationTargetAzureQuery</a>[]

azure_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#azure_query AutomationSoftwareUpdateConfiguration#azure_query}

---

##### `nonAzureQuery`<sup>Optional</sup> <a name="nonAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget.property.nonAzureQuery"></a>

```typescript
public readonly nonAzureQuery: IResolvable | AutomationSoftwareUpdateConfigurationTargetNonAzureQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery">AutomationSoftwareUpdateConfigurationTargetNonAzureQuery</a>[]

non_azure_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#non_azure_query AutomationSoftwareUpdateConfiguration#non_azure_query}

---

### AutomationSoftwareUpdateConfigurationTargetAzureQuery <a name="AutomationSoftwareUpdateConfigurationTargetAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationTargetAzureQuery: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.locations">locations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#locations AutomationSoftwareUpdateConfiguration#locations}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.scope">scope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#scope AutomationSoftwareUpdateConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.tagFilter">tagFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#tag_filter AutomationSoftwareUpdateConfiguration#tag_filter}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags">AutomationSoftwareUpdateConfigurationTargetAzureQueryTags</a>[]</code> | tags block. |

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#locations AutomationSoftwareUpdateConfiguration#locations}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.scope"></a>

```typescript
public readonly scope: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#scope AutomationSoftwareUpdateConfiguration#scope}.

---

##### `tagFilter`<sup>Optional</sup> <a name="tagFilter" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.tagFilter"></a>

```typescript
public readonly tagFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#tag_filter AutomationSoftwareUpdateConfiguration#tag_filter}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery.property.tags"></a>

```typescript
public readonly tags: IResolvable | AutomationSoftwareUpdateConfigurationTargetAzureQueryTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags">AutomationSoftwareUpdateConfigurationTargetAzureQueryTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#tags AutomationSoftwareUpdateConfiguration#tags}

---

### AutomationSoftwareUpdateConfigurationTargetAzureQueryTags <a name="AutomationSoftwareUpdateConfigurationTargetAzureQueryTags" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationTargetAzureQueryTags: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#tag AutomationSoftwareUpdateConfiguration#tag}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#values AutomationSoftwareUpdateConfiguration#values}. |

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#tag AutomationSoftwareUpdateConfiguration#tag}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#values AutomationSoftwareUpdateConfiguration#values}.

---

### AutomationSoftwareUpdateConfigurationTargetNonAzureQuery <a name="AutomationSoftwareUpdateConfigurationTargetNonAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationTargetNonAzureQuery: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery.property.functionAlias">functionAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#function_alias AutomationSoftwareUpdateConfiguration#function_alias}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#workspace_id AutomationSoftwareUpdateConfiguration#workspace_id}. |

---

##### `functionAlias`<sup>Optional</sup> <a name="functionAlias" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery.property.functionAlias"></a>

```typescript
public readonly functionAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#function_alias AutomationSoftwareUpdateConfiguration#function_alias}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#workspace_id AutomationSoftwareUpdateConfiguration#workspace_id}.

---

### AutomationSoftwareUpdateConfigurationTimeouts <a name="AutomationSoftwareUpdateConfigurationTimeouts" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationTimeouts: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#create AutomationSoftwareUpdateConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#delete AutomationSoftwareUpdateConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#read AutomationSoftwareUpdateConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#update AutomationSoftwareUpdateConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#create AutomationSoftwareUpdateConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#delete AutomationSoftwareUpdateConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#read AutomationSoftwareUpdateConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#update AutomationSoftwareUpdateConfiguration#update}.

---

### AutomationSoftwareUpdateConfigurationWindows <a name="AutomationSoftwareUpdateConfigurationWindows" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

const automationSoftwareUpdateConfigurationWindows: automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.classificationIncluded">classificationIncluded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#classification_included AutomationSoftwareUpdateConfiguration#classification_included}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.classificationsIncluded">classificationsIncluded</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#classifications_included AutomationSoftwareUpdateConfiguration#classifications_included}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.excludedKnowledgeBaseNumbers">excludedKnowledgeBaseNumbers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#excluded_knowledge_base_numbers AutomationSoftwareUpdateConfiguration#excluded_knowledge_base_numbers}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.includedKnowledgeBaseNumbers">includedKnowledgeBaseNumbers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#included_knowledge_base_numbers AutomationSoftwareUpdateConfiguration#included_knowledge_base_numbers}. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.reboot">reboot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#reboot AutomationSoftwareUpdateConfiguration#reboot}. |

---

##### `classificationIncluded`<sup>Optional</sup> <a name="classificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.classificationIncluded"></a>

```typescript
public readonly classificationIncluded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#classification_included AutomationSoftwareUpdateConfiguration#classification_included}.

---

##### `classificationsIncluded`<sup>Optional</sup> <a name="classificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.classificationsIncluded"></a>

```typescript
public readonly classificationsIncluded: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#classifications_included AutomationSoftwareUpdateConfiguration#classifications_included}.

---

##### `excludedKnowledgeBaseNumbers`<sup>Optional</sup> <a name="excludedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.excludedKnowledgeBaseNumbers"></a>

```typescript
public readonly excludedKnowledgeBaseNumbers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#excluded_knowledge_base_numbers AutomationSoftwareUpdateConfiguration#excluded_knowledge_base_numbers}.

---

##### `includedKnowledgeBaseNumbers`<sup>Optional</sup> <a name="includedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.includedKnowledgeBaseNumbers"></a>

```typescript
public readonly includedKnowledgeBaseNumbers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#included_knowledge_base_numbers AutomationSoftwareUpdateConfiguration#included_knowledge_base_numbers}.

---

##### `reboot`<sup>Optional</sup> <a name="reboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows.property.reboot"></a>

```typescript
public readonly reboot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_software_update_configuration#reboot AutomationSoftwareUpdateConfiguration#reboot}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationSoftwareUpdateConfigurationLinuxOutputReference <a name="AutomationSoftwareUpdateConfigurationLinuxOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetClassificationIncluded">resetClassificationIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetClassificationsIncluded">resetClassificationsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetExcludedPackages">resetExcludedPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetIncludedPackages">resetIncludedPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetReboot">resetReboot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassificationIncluded` <a name="resetClassificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetClassificationIncluded"></a>

```typescript
public resetClassificationIncluded(): void
```

##### `resetClassificationsIncluded` <a name="resetClassificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetClassificationsIncluded"></a>

```typescript
public resetClassificationsIncluded(): void
```

##### `resetExcludedPackages` <a name="resetExcludedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetExcludedPackages"></a>

```typescript
public resetExcludedPackages(): void
```

##### `resetIncludedPackages` <a name="resetIncludedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetIncludedPackages"></a>

```typescript
public resetIncludedPackages(): void
```

##### `resetReboot` <a name="resetReboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.resetReboot"></a>

```typescript
public resetReboot(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationIncludedInput">classificationIncludedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationsIncludedInput">classificationsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.excludedPackagesInput">excludedPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.includedPackagesInput">includedPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.rebootInput">rebootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationIncluded">classificationIncluded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationsIncluded">classificationsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.excludedPackages">excludedPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.includedPackages">includedPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.reboot">reboot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationIncludedInput`<sup>Optional</sup> <a name="classificationIncludedInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationIncludedInput"></a>

```typescript
public readonly classificationIncludedInput: string;
```

- *Type:* string

---

##### `classificationsIncludedInput`<sup>Optional</sup> <a name="classificationsIncludedInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationsIncludedInput"></a>

```typescript
public readonly classificationsIncludedInput: string[];
```

- *Type:* string[]

---

##### `excludedPackagesInput`<sup>Optional</sup> <a name="excludedPackagesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.excludedPackagesInput"></a>

```typescript
public readonly excludedPackagesInput: string[];
```

- *Type:* string[]

---

##### `includedPackagesInput`<sup>Optional</sup> <a name="includedPackagesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.includedPackagesInput"></a>

```typescript
public readonly includedPackagesInput: string[];
```

- *Type:* string[]

---

##### `rebootInput`<sup>Optional</sup> <a name="rebootInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.rebootInput"></a>

```typescript
public readonly rebootInput: string;
```

- *Type:* string

---

##### `classificationIncluded`<sup>Required</sup> <a name="classificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationIncluded"></a>

```typescript
public readonly classificationIncluded: string;
```

- *Type:* string

---

##### `classificationsIncluded`<sup>Required</sup> <a name="classificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.classificationsIncluded"></a>

```typescript
public readonly classificationsIncluded: string[];
```

- *Type:* string[]

---

##### `excludedPackages`<sup>Required</sup> <a name="excludedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.excludedPackages"></a>

```typescript
public readonly excludedPackages: string[];
```

- *Type:* string[]

---

##### `includedPackages`<sup>Required</sup> <a name="includedPackages" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.includedPackages"></a>

```typescript
public readonly includedPackages: string[];
```

- *Type:* string[]

---

##### `reboot`<sup>Required</sup> <a name="reboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.reboot"></a>

```typescript
public readonly reboot: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinuxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationSoftwareUpdateConfigurationLinux;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationLinux">AutomationSoftwareUpdateConfigurationLinux</a>

---


### AutomationSoftwareUpdateConfigurationPostTaskOutputReference <a name="AutomationSoftwareUpdateConfigurationPostTaskOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationSoftwareUpdateConfigurationPostTask;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPostTask">AutomationSoftwareUpdateConfigurationPostTask</a>

---


### AutomationSoftwareUpdateConfigurationPreTaskOutputReference <a name="AutomationSoftwareUpdateConfigurationPreTaskOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationSoftwareUpdateConfigurationPreTask;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationPreTask">AutomationSoftwareUpdateConfigurationPreTask</a>

---


### AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference <a name="AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.occurrenceInput">occurrenceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.occurrence">occurrence</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `occurrenceInput`<sup>Optional</sup> <a name="occurrenceInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.occurrenceInput"></a>

```typescript
public readonly occurrenceInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `occurrence`<sup>Required</sup> <a name="occurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.occurrence"></a>

```typescript
public readonly occurrence: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a>

---


### AutomationSoftwareUpdateConfigurationScheduleOutputReference <a name="AutomationSoftwareUpdateConfigurationScheduleOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.putMonthlyOccurrence">putMonthlyOccurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetAdvancedMonthDays">resetAdvancedMonthDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetAdvancedWeekDays">resetAdvancedWeekDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetExpiryTime">resetExpiryTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetExpiryTimeOffsetMinutes">resetExpiryTimeOffsetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetMonthlyOccurrence">resetMonthlyOccurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetNextRun">resetNextRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetNextRunOffsetMinutes">resetNextRunOffsetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetStartTimeOffsetMinutes">resetStartTimeOffsetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonthlyOccurrence` <a name="putMonthlyOccurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.putMonthlyOccurrence"></a>

```typescript
public putMonthlyOccurrence(value: AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.putMonthlyOccurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a>

---

##### `resetAdvancedMonthDays` <a name="resetAdvancedMonthDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetAdvancedMonthDays"></a>

```typescript
public resetAdvancedMonthDays(): void
```

##### `resetAdvancedWeekDays` <a name="resetAdvancedWeekDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetAdvancedWeekDays"></a>

```typescript
public resetAdvancedWeekDays(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpiryTime` <a name="resetExpiryTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetExpiryTime"></a>

```typescript
public resetExpiryTime(): void
```

##### `resetExpiryTimeOffsetMinutes` <a name="resetExpiryTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetExpiryTimeOffsetMinutes"></a>

```typescript
public resetExpiryTimeOffsetMinutes(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetMonthlyOccurrence` <a name="resetMonthlyOccurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetMonthlyOccurrence"></a>

```typescript
public resetMonthlyOccurrence(): void
```

##### `resetNextRun` <a name="resetNextRun" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetNextRun"></a>

```typescript
public resetNextRun(): void
```

##### `resetNextRunOffsetMinutes` <a name="resetNextRunOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetNextRunOffsetMinutes"></a>

```typescript
public resetNextRunOffsetMinutes(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetStartTimeOffsetMinutes` <a name="resetStartTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetStartTimeOffsetMinutes"></a>

```typescript
public resetStartTimeOffsetMinutes(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.monthlyOccurrence">monthlyOccurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedMonthDaysInput">advancedMonthDaysInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedWeekDaysInput">advancedWeekDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeInput">expiryTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeOffsetMinutesInput">expiryTimeOffsetMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.monthlyOccurrenceInput">monthlyOccurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunInput">nextRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunOffsetMinutesInput">nextRunOffsetMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeOffsetMinutesInput">startTimeOffsetMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedMonthDays">advancedMonthDays</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedWeekDays">advancedWeekDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTime">expiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeOffsetMinutes">expiryTimeOffsetMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRun">nextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunOffsetMinutes">nextRunOffsetMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeOffsetMinutes">startTimeOffsetMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `monthlyOccurrence`<sup>Required</sup> <a name="monthlyOccurrence" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.monthlyOccurrence"></a>

```typescript
public readonly monthlyOccurrence: AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference</a>

---

##### `advancedMonthDaysInput`<sup>Optional</sup> <a name="advancedMonthDaysInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedMonthDaysInput"></a>

```typescript
public readonly advancedMonthDaysInput: number[];
```

- *Type:* number[]

---

##### `advancedWeekDaysInput`<sup>Optional</sup> <a name="advancedWeekDaysInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedWeekDaysInput"></a>

```typescript
public readonly advancedWeekDaysInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expiryTimeInput`<sup>Optional</sup> <a name="expiryTimeInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeInput"></a>

```typescript
public readonly expiryTimeInput: string;
```

- *Type:* string

---

##### `expiryTimeOffsetMinutesInput`<sup>Optional</sup> <a name="expiryTimeOffsetMinutesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeOffsetMinutesInput"></a>

```typescript
public readonly expiryTimeOffsetMinutesInput: number;
```

- *Type:* number

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monthlyOccurrenceInput`<sup>Optional</sup> <a name="monthlyOccurrenceInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.monthlyOccurrenceInput"></a>

```typescript
public readonly monthlyOccurrenceInput: AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence">AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence</a>

---

##### `nextRunInput`<sup>Optional</sup> <a name="nextRunInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunInput"></a>

```typescript
public readonly nextRunInput: string;
```

- *Type:* string

---

##### `nextRunOffsetMinutesInput`<sup>Optional</sup> <a name="nextRunOffsetMinutesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunOffsetMinutesInput"></a>

```typescript
public readonly nextRunOffsetMinutesInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `startTimeOffsetMinutesInput`<sup>Optional</sup> <a name="startTimeOffsetMinutesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeOffsetMinutesInput"></a>

```typescript
public readonly startTimeOffsetMinutesInput: number;
```

- *Type:* number

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `advancedMonthDays`<sup>Required</sup> <a name="advancedMonthDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedMonthDays"></a>

```typescript
public readonly advancedMonthDays: number[];
```

- *Type:* number[]

---

##### `advancedWeekDays`<sup>Required</sup> <a name="advancedWeekDays" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.advancedWeekDays"></a>

```typescript
public readonly advancedWeekDays: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expiryTime`<sup>Required</sup> <a name="expiryTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTime"></a>

```typescript
public readonly expiryTime: string;
```

- *Type:* string

---

##### `expiryTimeOffsetMinutes`<sup>Required</sup> <a name="expiryTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.expiryTimeOffsetMinutes"></a>

```typescript
public readonly expiryTimeOffsetMinutes: number;
```

- *Type:* number

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nextRun`<sup>Required</sup> <a name="nextRun" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRun"></a>

```typescript
public readonly nextRun: string;
```

- *Type:* string

---

##### `nextRunOffsetMinutes`<sup>Required</sup> <a name="nextRunOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.nextRunOffsetMinutes"></a>

```typescript
public readonly nextRunOffsetMinutes: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `startTimeOffsetMinutes`<sup>Required</sup> <a name="startTimeOffsetMinutes" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.startTimeOffsetMinutes"></a>

```typescript
public readonly startTimeOffsetMinutes: number;
```

- *Type:* number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationSoftwareUpdateConfigurationSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationSchedule">AutomationSoftwareUpdateConfigurationSchedule</a>

---


### AutomationSoftwareUpdateConfigurationTargetAzureQueryList <a name="AutomationSoftwareUpdateConfigurationTargetAzureQueryList" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.get"></a>

```typescript
public get(index: number): AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery">AutomationSoftwareUpdateConfigurationTargetAzureQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationSoftwareUpdateConfigurationTargetAzureQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery">AutomationSoftwareUpdateConfigurationTargetAzureQuery</a>[]

---


### AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference <a name="AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetTagFilter">resetTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | AutomationSoftwareUpdateConfigurationTargetAzureQueryTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags">AutomationSoftwareUpdateConfigurationTargetAzureQueryTags</a>[]

---

##### `resetLocations` <a name="resetLocations" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetLocations"></a>

```typescript
public resetLocations(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTagFilter` <a name="resetTagFilter" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetTagFilter"></a>

```typescript
public resetTagFilter(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList">AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.scopeInput">scopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagFilterInput">tagFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags">AutomationSoftwareUpdateConfigurationTargetAzureQueryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.scope">scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagFilter">tagFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery">AutomationSoftwareUpdateConfigurationTargetAzureQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tags"></a>

```typescript
public readonly tags: AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList">AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList</a>

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string[];
```

- *Type:* string[]

---

##### `tagFilterInput`<sup>Optional</sup> <a name="tagFilterInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagFilterInput"></a>

```typescript
public readonly tagFilterInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AutomationSoftwareUpdateConfigurationTargetAzureQueryTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags">AutomationSoftwareUpdateConfigurationTargetAzureQueryTags</a>[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.scope"></a>

```typescript
public readonly scope: string[];
```

- *Type:* string[]

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.tagFilter"></a>

```typescript
public readonly tagFilter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationSoftwareUpdateConfigurationTargetAzureQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery">AutomationSoftwareUpdateConfigurationTargetAzureQuery</a>

---


### AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList <a name="AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.get"></a>

```typescript
public get(index: number): AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags">AutomationSoftwareUpdateConfigurationTargetAzureQueryTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationSoftwareUpdateConfigurationTargetAzureQueryTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags">AutomationSoftwareUpdateConfigurationTargetAzureQueryTags</a>[]

---


### AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference <a name="AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags">AutomationSoftwareUpdateConfigurationTargetAzureQueryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationSoftwareUpdateConfigurationTargetAzureQueryTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryTags">AutomationSoftwareUpdateConfigurationTargetAzureQueryTags</a>

---


### AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList <a name="AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.get"></a>

```typescript
public get(index: number): AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery">AutomationSoftwareUpdateConfigurationTargetNonAzureQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationSoftwareUpdateConfigurationTargetNonAzureQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery">AutomationSoftwareUpdateConfigurationTargetNonAzureQuery</a>[]

---


### AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference <a name="AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resetFunctionAlias">resetFunctionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionAlias` <a name="resetFunctionAlias" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resetFunctionAlias"></a>

```typescript
public resetFunctionAlias(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.functionAliasInput">functionAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.functionAlias">functionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery">AutomationSoftwareUpdateConfigurationTargetNonAzureQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionAliasInput`<sup>Optional</sup> <a name="functionAliasInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.functionAliasInput"></a>

```typescript
public readonly functionAliasInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `functionAlias`<sup>Required</sup> <a name="functionAlias" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.functionAlias"></a>

```typescript
public readonly functionAlias: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationSoftwareUpdateConfigurationTargetNonAzureQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery">AutomationSoftwareUpdateConfigurationTargetNonAzureQuery</a>

---


### AutomationSoftwareUpdateConfigurationTargetOutputReference <a name="AutomationSoftwareUpdateConfigurationTargetOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putAzureQuery">putAzureQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putNonAzureQuery">putNonAzureQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resetAzureQuery">resetAzureQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resetNonAzureQuery">resetNonAzureQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureQuery` <a name="putAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putAzureQuery"></a>

```typescript
public putAzureQuery(value: IResolvable | AutomationSoftwareUpdateConfigurationTargetAzureQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putAzureQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery">AutomationSoftwareUpdateConfigurationTargetAzureQuery</a>[]

---

##### `putNonAzureQuery` <a name="putNonAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putNonAzureQuery"></a>

```typescript
public putNonAzureQuery(value: IResolvable | AutomationSoftwareUpdateConfigurationTargetNonAzureQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.putNonAzureQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery">AutomationSoftwareUpdateConfigurationTargetNonAzureQuery</a>[]

---

##### `resetAzureQuery` <a name="resetAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resetAzureQuery"></a>

```typescript
public resetAzureQuery(): void
```

##### `resetNonAzureQuery` <a name="resetNonAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.resetNonAzureQuery"></a>

```typescript
public resetNonAzureQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.azureQuery">azureQuery</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList">AutomationSoftwareUpdateConfigurationTargetAzureQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.nonAzureQuery">nonAzureQuery</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList">AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.azureQueryInput">azureQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery">AutomationSoftwareUpdateConfigurationTargetAzureQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.nonAzureQueryInput">nonAzureQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery">AutomationSoftwareUpdateConfigurationTargetNonAzureQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureQuery`<sup>Required</sup> <a name="azureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.azureQuery"></a>

```typescript
public readonly azureQuery: AutomationSoftwareUpdateConfigurationTargetAzureQueryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQueryList">AutomationSoftwareUpdateConfigurationTargetAzureQueryList</a>

---

##### `nonAzureQuery`<sup>Required</sup> <a name="nonAzureQuery" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.nonAzureQuery"></a>

```typescript
public readonly nonAzureQuery: AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList">AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList</a>

---

##### `azureQueryInput`<sup>Optional</sup> <a name="azureQueryInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.azureQueryInput"></a>

```typescript
public readonly azureQueryInput: IResolvable | AutomationSoftwareUpdateConfigurationTargetAzureQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetAzureQuery">AutomationSoftwareUpdateConfigurationTargetAzureQuery</a>[]

---

##### `nonAzureQueryInput`<sup>Optional</sup> <a name="nonAzureQueryInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.nonAzureQueryInput"></a>

```typescript
public readonly nonAzureQueryInput: IResolvable | AutomationSoftwareUpdateConfigurationTargetNonAzureQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetNonAzureQuery">AutomationSoftwareUpdateConfigurationTargetNonAzureQuery</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationSoftwareUpdateConfigurationTarget;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTarget">AutomationSoftwareUpdateConfigurationTarget</a>

---


### AutomationSoftwareUpdateConfigurationTimeoutsOutputReference <a name="AutomationSoftwareUpdateConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts">AutomationSoftwareUpdateConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationSoftwareUpdateConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationTimeouts">AutomationSoftwareUpdateConfigurationTimeouts</a>

---


### AutomationSoftwareUpdateConfigurationWindowsOutputReference <a name="AutomationSoftwareUpdateConfigurationWindowsOutputReference" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.Initializer"></a>

```typescript
import { automationSoftwareUpdateConfiguration } from '@cdktf/provider-azurerm'

new automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetClassificationIncluded">resetClassificationIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetClassificationsIncluded">resetClassificationsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetExcludedKnowledgeBaseNumbers">resetExcludedKnowledgeBaseNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetIncludedKnowledgeBaseNumbers">resetIncludedKnowledgeBaseNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetReboot">resetReboot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassificationIncluded` <a name="resetClassificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetClassificationIncluded"></a>

```typescript
public resetClassificationIncluded(): void
```

##### `resetClassificationsIncluded` <a name="resetClassificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetClassificationsIncluded"></a>

```typescript
public resetClassificationsIncluded(): void
```

##### `resetExcludedKnowledgeBaseNumbers` <a name="resetExcludedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetExcludedKnowledgeBaseNumbers"></a>

```typescript
public resetExcludedKnowledgeBaseNumbers(): void
```

##### `resetIncludedKnowledgeBaseNumbers` <a name="resetIncludedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetIncludedKnowledgeBaseNumbers"></a>

```typescript
public resetIncludedKnowledgeBaseNumbers(): void
```

##### `resetReboot` <a name="resetReboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.resetReboot"></a>

```typescript
public resetReboot(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationIncludedInput">classificationIncludedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationsIncludedInput">classificationsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.excludedKnowledgeBaseNumbersInput">excludedKnowledgeBaseNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.includedKnowledgeBaseNumbersInput">includedKnowledgeBaseNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.rebootInput">rebootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationIncluded">classificationIncluded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationsIncluded">classificationsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.excludedKnowledgeBaseNumbers">excludedKnowledgeBaseNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.includedKnowledgeBaseNumbers">includedKnowledgeBaseNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.reboot">reboot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationIncludedInput`<sup>Optional</sup> <a name="classificationIncludedInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationIncludedInput"></a>

```typescript
public readonly classificationIncludedInput: string;
```

- *Type:* string

---

##### `classificationsIncludedInput`<sup>Optional</sup> <a name="classificationsIncludedInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationsIncludedInput"></a>

```typescript
public readonly classificationsIncludedInput: string[];
```

- *Type:* string[]

---

##### `excludedKnowledgeBaseNumbersInput`<sup>Optional</sup> <a name="excludedKnowledgeBaseNumbersInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.excludedKnowledgeBaseNumbersInput"></a>

```typescript
public readonly excludedKnowledgeBaseNumbersInput: string[];
```

- *Type:* string[]

---

##### `includedKnowledgeBaseNumbersInput`<sup>Optional</sup> <a name="includedKnowledgeBaseNumbersInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.includedKnowledgeBaseNumbersInput"></a>

```typescript
public readonly includedKnowledgeBaseNumbersInput: string[];
```

- *Type:* string[]

---

##### `rebootInput`<sup>Optional</sup> <a name="rebootInput" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.rebootInput"></a>

```typescript
public readonly rebootInput: string;
```

- *Type:* string

---

##### `classificationIncluded`<sup>Required</sup> <a name="classificationIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationIncluded"></a>

```typescript
public readonly classificationIncluded: string;
```

- *Type:* string

---

##### `classificationsIncluded`<sup>Required</sup> <a name="classificationsIncluded" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.classificationsIncluded"></a>

```typescript
public readonly classificationsIncluded: string[];
```

- *Type:* string[]

---

##### `excludedKnowledgeBaseNumbers`<sup>Required</sup> <a name="excludedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.excludedKnowledgeBaseNumbers"></a>

```typescript
public readonly excludedKnowledgeBaseNumbers: string[];
```

- *Type:* string[]

---

##### `includedKnowledgeBaseNumbers`<sup>Required</sup> <a name="includedKnowledgeBaseNumbers" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.includedKnowledgeBaseNumbers"></a>

```typescript
public readonly includedKnowledgeBaseNumbers: string[];
```

- *Type:* string[]

---

##### `reboot`<sup>Required</sup> <a name="reboot" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.reboot"></a>

```typescript
public readonly reboot: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationSoftwareUpdateConfigurationWindows;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSoftwareUpdateConfiguration.AutomationSoftwareUpdateConfigurationWindows">AutomationSoftwareUpdateConfigurationWindows</a>

---



