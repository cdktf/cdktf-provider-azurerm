# `azurerm_digital_twins_endpoint_servicebus`

Refer to the Terraform Registory for docs: [`azurerm_digital_twins_endpoint_servicebus`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus).

# `digitalTwinsEndpointServicebus` Submodule <a name="`digitalTwinsEndpointServicebus` Submodule" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsEndpointServicebus <a name="DigitalTwinsEndpointServicebus" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus azurerm_digital_twins_endpoint_servicebus}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer"></a>

```typescript
import { digitalTwinsEndpointServicebus } from '@cdktf/provider-azurerm'

new digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus(scope: Construct, id: string, config: DigitalTwinsEndpointServicebusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig">DigitalTwinsEndpointServicebusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig">DigitalTwinsEndpointServicebusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetDeadLetterStorageSecret">resetDeadLetterStorageSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts"></a>

```typescript
public putTimeouts(value: DigitalTwinsEndpointServicebusTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a>

---

##### `resetDeadLetterStorageSecret` <a name="resetDeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetDeadLetterStorageSecret"></a>

```typescript
public resetDeadLetterStorageSecret(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct"></a>

```typescript
import { digitalTwinsEndpointServicebus } from '@cdktf/provider-azurerm'

digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement"></a>

```typescript
import { digitalTwinsEndpointServicebus } from '@cdktf/provider-azurerm'

digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource"></a>

```typescript
import { digitalTwinsEndpointServicebus } from '@cdktf/provider-azurerm'

digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference">DigitalTwinsEndpointServicebusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecretInput">deadLetterStorageSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsIdInput">digitalTwinsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionStringInput">servicebusPrimaryConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionStringInput">servicebusSecondaryConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsId">digitalTwinsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionString">servicebusPrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionString">servicebusSecondaryConnectionString</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeouts"></a>

```typescript
public readonly timeouts: DigitalTwinsEndpointServicebusTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference">DigitalTwinsEndpointServicebusTimeoutsOutputReference</a>

---

##### `deadLetterStorageSecretInput`<sup>Optional</sup> <a name="deadLetterStorageSecretInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecretInput"></a>

```typescript
public readonly deadLetterStorageSecretInput: string;
```

- *Type:* string

---

##### `digitalTwinsIdInput`<sup>Optional</sup> <a name="digitalTwinsIdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsIdInput"></a>

```typescript
public readonly digitalTwinsIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `servicebusPrimaryConnectionStringInput`<sup>Optional</sup> <a name="servicebusPrimaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionStringInput"></a>

```typescript
public readonly servicebusPrimaryConnectionStringInput: string;
```

- *Type:* string

---

##### `servicebusSecondaryConnectionStringInput`<sup>Optional</sup> <a name="servicebusSecondaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionStringInput"></a>

```typescript
public readonly servicebusSecondaryConnectionStringInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DigitalTwinsEndpointServicebusTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a>

---

##### `deadLetterStorageSecret`<sup>Required</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecret"></a>

```typescript
public readonly deadLetterStorageSecret: string;
```

- *Type:* string

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsId"></a>

```typescript
public readonly digitalTwinsId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `servicebusPrimaryConnectionString`<sup>Required</sup> <a name="servicebusPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionString"></a>

```typescript
public readonly servicebusPrimaryConnectionString: string;
```

- *Type:* string

---

##### `servicebusSecondaryConnectionString`<sup>Required</sup> <a name="servicebusSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionString"></a>

```typescript
public readonly servicebusSecondaryConnectionString: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsEndpointServicebusConfig <a name="DigitalTwinsEndpointServicebusConfig" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.Initializer"></a>

```typescript
import { digitalTwinsEndpointServicebus } from '@cdktf/provider-azurerm'

const digitalTwinsEndpointServicebusConfig: digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.digitalTwinsId">digitalTwinsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#digital_twins_id DigitalTwinsEndpointServicebus#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#name DigitalTwinsEndpointServicebus#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusPrimaryConnectionString">servicebusPrimaryConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_primary_connection_string DigitalTwinsEndpointServicebus#servicebus_primary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusSecondaryConnectionString">servicebusSecondaryConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_secondary_connection_string DigitalTwinsEndpointServicebus#servicebus_secondary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#dead_letter_storage_secret DigitalTwinsEndpointServicebus#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#id DigitalTwinsEndpointServicebus#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.digitalTwinsId"></a>

```typescript
public readonly digitalTwinsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#digital_twins_id DigitalTwinsEndpointServicebus#digital_twins_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#name DigitalTwinsEndpointServicebus#name}.

---

##### `servicebusPrimaryConnectionString`<sup>Required</sup> <a name="servicebusPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusPrimaryConnectionString"></a>

```typescript
public readonly servicebusPrimaryConnectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_primary_connection_string DigitalTwinsEndpointServicebus#servicebus_primary_connection_string}.

---

##### `servicebusSecondaryConnectionString`<sup>Required</sup> <a name="servicebusSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusSecondaryConnectionString"></a>

```typescript
public readonly servicebusSecondaryConnectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_secondary_connection_string DigitalTwinsEndpointServicebus#servicebus_secondary_connection_string}.

---

##### `deadLetterStorageSecret`<sup>Optional</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.deadLetterStorageSecret"></a>

```typescript
public readonly deadLetterStorageSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#dead_letter_storage_secret DigitalTwinsEndpointServicebus#dead_letter_storage_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#id DigitalTwinsEndpointServicebus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DigitalTwinsEndpointServicebusTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#timeouts DigitalTwinsEndpointServicebus#timeouts}

---

### DigitalTwinsEndpointServicebusTimeouts <a name="DigitalTwinsEndpointServicebusTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.Initializer"></a>

```typescript
import { digitalTwinsEndpointServicebus } from '@cdktf/provider-azurerm'

const digitalTwinsEndpointServicebusTimeouts: digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#create DigitalTwinsEndpointServicebus#create}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#delete DigitalTwinsEndpointServicebus#delete}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#read DigitalTwinsEndpointServicebus#read}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#update DigitalTwinsEndpointServicebus#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#create DigitalTwinsEndpointServicebus#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#delete DigitalTwinsEndpointServicebus#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#read DigitalTwinsEndpointServicebus#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_endpoint_servicebus#update DigitalTwinsEndpointServicebus#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsEndpointServicebusTimeoutsOutputReference <a name="DigitalTwinsEndpointServicebusTimeoutsOutputReference" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer"></a>

```typescript
import { digitalTwinsEndpointServicebus } from '@cdktf/provider-azurerm'

new digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DigitalTwinsEndpointServicebusTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a>

---



