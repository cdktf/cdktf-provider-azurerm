# `azurerm_lab_service_schedule`

Refer to the Terraform Registory for docs: [`azurerm_lab_service_schedule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule).

# `labServiceSchedule` Submodule <a name="`labServiceSchedule` Submodule" id="@cdktf/provider-azurerm.labServiceSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LabServiceSchedule <a name="LabServiceSchedule" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule azurerm_lab_service_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.Initializer"></a>

```typescript
import { labServiceSchedule } from '@cdktf/provider-azurerm'

new labServiceSchedule.LabServiceSchedule(scope: Construct, id: string, config: LabServiceScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig">LabServiceScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig">LabServiceScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.putRecurrence"></a>

```typescript
public putRecurrence(value: LabServiceScheduleRecurrence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence">LabServiceScheduleRecurrence</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: LabServiceScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts">LabServiceScheduleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetRecurrence"></a>

```typescript
public resetRecurrence(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.isConstruct"></a>

```typescript
import { labServiceSchedule } from '@cdktf/provider-azurerm'

labServiceSchedule.LabServiceSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.isTerraformElement"></a>

```typescript
import { labServiceSchedule } from '@cdktf/provider-azurerm'

labServiceSchedule.LabServiceSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.isTerraformResource"></a>

```typescript
import { labServiceSchedule } from '@cdktf/provider-azurerm'

labServiceSchedule.LabServiceSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference">LabServiceScheduleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference">LabServiceScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.labIdInput">labIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.recurrenceInput">recurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence">LabServiceScheduleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.stopTimeInput">stopTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts">LabServiceScheduleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.labId">labId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.stopTime">stopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.recurrence"></a>

```typescript
public readonly recurrence: LabServiceScheduleRecurrenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference">LabServiceScheduleRecurrenceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: LabServiceScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference">LabServiceScheduleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labIdInput`<sup>Optional</sup> <a name="labIdInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.labIdInput"></a>

```typescript
public readonly labIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: LabServiceScheduleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence">LabServiceScheduleRecurrence</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `stopTimeInput`<sup>Optional</sup> <a name="stopTimeInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.stopTimeInput"></a>

```typescript
public readonly stopTimeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LabServiceScheduleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts">LabServiceScheduleTimeouts</a> | cdktf.IResolvable

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labId`<sup>Required</sup> <a name="labId" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.labId"></a>

```typescript
public readonly labId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `stopTime`<sup>Required</sup> <a name="stopTime" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.stopTime"></a>

```typescript
public readonly stopTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LabServiceScheduleConfig <a name="LabServiceScheduleConfig" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.Initializer"></a>

```typescript
import { labServiceSchedule } from '@cdktf/provider-azurerm'

const labServiceScheduleConfig: labServiceSchedule.LabServiceScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.labId">labId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#lab_id LabServiceSchedule#lab_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#name LabServiceSchedule#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.stopTime">stopTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#stop_time LabServiceSchedule#stop_time}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#time_zone LabServiceSchedule#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#id LabServiceSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.notes">notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#notes LabServiceSchedule#notes}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence">LabServiceScheduleRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#start_time LabServiceSchedule#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts">LabServiceScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `labId`<sup>Required</sup> <a name="labId" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.labId"></a>

```typescript
public readonly labId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#lab_id LabServiceSchedule#lab_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#name LabServiceSchedule#name}.

---

##### `stopTime`<sup>Required</sup> <a name="stopTime" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.stopTime"></a>

```typescript
public readonly stopTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#stop_time LabServiceSchedule#stop_time}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#time_zone LabServiceSchedule#time_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#id LabServiceSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#notes LabServiceSchedule#notes}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.recurrence"></a>

```typescript
public readonly recurrence: LabServiceScheduleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence">LabServiceScheduleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#recurrence LabServiceSchedule#recurrence}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#start_time LabServiceSchedule#start_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LabServiceScheduleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts">LabServiceScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#timeouts LabServiceSchedule#timeouts}

---

### LabServiceScheduleRecurrence <a name="LabServiceScheduleRecurrence" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence.Initializer"></a>

```typescript
import { labServiceSchedule } from '@cdktf/provider-azurerm'

const labServiceScheduleRecurrence: labServiceSchedule.LabServiceScheduleRecurrence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence.property.expirationDate">expirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#expiration_date LabServiceSchedule#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#frequency LabServiceSchedule#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#interval LabServiceSchedule#interval}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence.property.weekDays">weekDays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#week_days LabServiceSchedule#week_days}. |

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#expiration_date LabServiceSchedule#expiration_date}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#frequency LabServiceSchedule#frequency}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#interval LabServiceSchedule#interval}.

---

##### `weekDays`<sup>Optional</sup> <a name="weekDays" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence.property.weekDays"></a>

```typescript
public readonly weekDays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#week_days LabServiceSchedule#week_days}.

---

### LabServiceScheduleTimeouts <a name="LabServiceScheduleTimeouts" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts.Initializer"></a>

```typescript
import { labServiceSchedule } from '@cdktf/provider-azurerm'

const labServiceScheduleTimeouts: labServiceSchedule.LabServiceScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#create LabServiceSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#delete LabServiceSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#read LabServiceSchedule#read}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#update LabServiceSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#create LabServiceSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#delete LabServiceSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#read LabServiceSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/lab_service_schedule#update LabServiceSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LabServiceScheduleRecurrenceOutputReference <a name="LabServiceScheduleRecurrenceOutputReference" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.Initializer"></a>

```typescript
import { labServiceSchedule } from '@cdktf/provider-azurerm'

new labServiceSchedule.LabServiceScheduleRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.resetWeekDays">resetWeekDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetWeekDays` <a name="resetWeekDays" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.resetWeekDays"></a>

```typescript
public resetWeekDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.expirationDateInput">expirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.weekDaysInput">weekDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.weekDays">weekDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence">LabServiceScheduleRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.expirationDateInput"></a>

```typescript
public readonly expirationDateInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `weekDaysInput`<sup>Optional</sup> <a name="weekDaysInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.weekDaysInput"></a>

```typescript
public readonly weekDaysInput: string[];
```

- *Type:* string[]

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `weekDays`<sup>Required</sup> <a name="weekDays" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.weekDays"></a>

```typescript
public readonly weekDays: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceScheduleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleRecurrence">LabServiceScheduleRecurrence</a>

---


### LabServiceScheduleTimeoutsOutputReference <a name="LabServiceScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { labServiceSchedule } from '@cdktf/provider-azurerm'

new labServiceSchedule.LabServiceScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts">LabServiceScheduleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServiceScheduleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceSchedule.LabServiceScheduleTimeouts">LabServiceScheduleTimeouts</a> | cdktf.IResolvable

---



