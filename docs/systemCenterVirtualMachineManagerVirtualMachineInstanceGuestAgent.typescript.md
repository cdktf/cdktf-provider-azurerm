# `systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent` Submodule <a name="`systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent <a name="SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent azurerm_system_center_virtual_machine_manager_virtual_machine_instance_guest_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent } from '@cdktf/provider-azurerm'

new systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent(scope: Construct, id: string, config: SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetProvisioningAction">resetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.putTimeouts"></a>

```typescript
public putTimeouts(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProvisioningAction` <a name="resetProvisioningAction" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetProvisioningAction"></a>

```typescript
public resetProvisioningAction(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isConstruct"></a>

```typescript
import { systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformElement"></a>

```typescript
import { systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformResource"></a>

```typescript
import { systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport"></a>

```typescript
import { systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioningActionInput">provisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.scopedResourceIdInput">scopedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.scopedResourceId">scopedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.timeouts"></a>

```typescript
public readonly timeouts: SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `provisioningActionInput`<sup>Optional</sup> <a name="provisioningActionInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioningActionInput"></a>

```typescript
public readonly provisioningActionInput: string;
```

- *Type:* string

---

##### `scopedResourceIdInput`<sup>Optional</sup> <a name="scopedResourceIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.scopedResourceIdInput"></a>

```typescript
public readonly scopedResourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

---

##### `scopedResourceId`<sup>Required</sup> <a name="scopedResourceId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.scopedResourceId"></a>

```typescript
public readonly scopedResourceId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig <a name="SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent } from '@cdktf/provider-azurerm'

const systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig: systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#password SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#password}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.scopedResourceId">scopedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#scoped_resource_id SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#scoped_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#username SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#username}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#id SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#provisioning_action SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#provisioning_action}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#password SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#password}.

---

##### `scopedResourceId`<sup>Required</sup> <a name="scopedResourceId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.scopedResourceId"></a>

```typescript
public readonly scopedResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#scoped_resource_id SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#scoped_resource_id}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#username SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#id SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#provisioning_action SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#provisioning_action}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#timeouts SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#timeouts}

---

### SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts <a name="SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent } from '@cdktf/provider-azurerm'

const systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts: systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#create SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#delete SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#read SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#create SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#delete SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#read SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent } from '@cdktf/provider-azurerm'

new systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a>

---



